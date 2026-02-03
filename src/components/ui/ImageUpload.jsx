import React, { useState } from 'react';
import { Button } from './button';
import './ImageUpload.css';

const ImageUpload = ({ currentImage, onImageChange, onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(currentImage);
  const [uploading, setUploading] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);

    // Handle upload
    if (onImageUpload) {
      setUploading(true);
      try {
        const imagePath = await onImageUpload(file);
        if (onImageChange) {
          onImageChange(imagePath);
        }
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed. Please try again.');
      } finally {
        setUploading(false);
      }
    }
  };

  const simulateUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would upload to a server
        // For now, we'll simulate saving to the public directory structure
        const category = file.name.includes('appetizer') ? 'Appetizers' :
                       file.name.includes('main') ? 'Main Entres' :
                       file.name.includes('side') ? 'Sides' :
                       file.name.includes('kid') ? "Kid's Meals" :
                       file.name.includes('dessert') ? 'Desserts' :
                       file.name.includes('drink') ? 'Drinks' : 'Appetizers';
        
        const imagePath = `/photos/${category}/${file.name}`;
        resolve(imagePath);
      }, 1500);
    });
  };

  return (
    <div className="image-upload-container">
      <div
        className={`image-upload-area ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="image-preview">
            <img src={preview} alt="Preview" className="preview-image" />
            <div className="image-overlay">
              <p>Drop new image or click to change</p>
            </div>
          </div>
        ) : (
          <div className="upload-placeholder">
            <div className="upload-icon">📸</div>
            <p className="upload-text">
              Drag & drop an image here, or click to select
            </p>
            <p className="upload-subtext">
              Supports JPG, PNG, WebP (max 5MB)
            </p>
          </div>
        )}
        
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="file-input"
          disabled={uploading}
        />
      </div>

      {uploading && (
        <div className="upload-status">
          <div className="upload-spinner"></div>
          <p>Uploading image...</p>
        </div>
      )}

      {preview && !uploading && (
        <div className="upload-actions">
          <Button
            onClick={() => {
              setPreview(null);
              if (onImageChange) onImageChange('');
            }}
            variant="ghost"
            size="sm"
          >
            Remove Image
          </Button>
        </div>
      )}
    </div>
  );
};

// Default upload handler for demo purposes
ImageUpload.defaultProps = {
  onImageUpload: async (file) => {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a mock path based on file name
    const category = 'Appetizers'; // You can make this dynamic
    return `/photos/${category}/${file.name}`;
  }
};

export default ImageUpload;