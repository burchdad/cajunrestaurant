import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import menuDataFile from "../data/menuData.json";
import "./StaffDashboard.css";

const StaffDashboard = () => {
  const [menuData, setMenuData] = useState(menuDataFile);
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: 'appetizers',
    active: true
  });
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("staff_authenticated");
    const loginTime = localStorage.getItem("staff_login_time");
    
    if (!isAuthenticated || !loginTime) {
      navigate("/staff");
      return;
    }

    // Check if login is older than 24 hours
    const now = Date.now();
    const loginTimeStamp = parseInt(loginTime);
    if (now - loginTimeStamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem("staff_authenticated");
      localStorage.removeItem("staff_login_time");
      navigate("/staff");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("staff_authenticated");
    localStorage.removeItem("staff_login_time");
    navigate("/staff");
  };

  const generateId = (category) => {
    const prefix = category.substring(0, 4);
    const existingItems = menuData.menuItems[category];
    const maxId = existingItems.reduce((max, item) => {
      const num = parseInt(item.id.replace(/\D/g, ''));
      return Math.max(max, num);
    }, 0);
    return `${prefix}${(maxId + 1).toString().padStart(3, '0')}`;
  };

  const handleAddItem = () => {
    if (!formData.name || !formData.price || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    const newItem = {
      ...formData,
      id: generateId(formData.category),
      price: parseFloat(formData.price).toFixed(2)
    };

    const updatedMenuData = {
      ...menuData,
      menuItems: {
        ...menuData.menuItems,
        [formData.category]: [...menuData.menuItems[formData.category], newItem]
      }
    };

    setMenuData(updatedMenuData);
    saveMenuData(updatedMenuData);
    resetForm();
    setShowAddForm(false);
  };

  const handleEditItem = (item) => {
    setEditingItem(item.id);
    setFormData({
      name: item.name,
      price: item.price.toString(),
      description: item.description,
      image: item.image,
      category: item.category,
      active: item.active
    });
    setShowEditModal(true);
  };

  const handleUpdateItem = () => {
    if (!formData.name || !formData.price || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    const updatedMenuData = {
      ...menuData,
      menuItems: {
        ...menuData.menuItems,
        [activeCategory]: menuData.menuItems[activeCategory].map(item =>
          item.id === editingItem
            ? { ...item, ...formData, price: parseFloat(formData.price).toFixed(2) }
            : item
        )
      }
    };

    setMenuData(updatedMenuData);
    saveMenuData(updatedMenuData);
    resetForm();
    setEditingItem(null);
    setShowEditModal(false);
  };

  const handleDeleteItem = (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedMenuData = {
        ...menuData,
        menuItems: {
          ...menuData.menuItems,
          [activeCategory]: menuData.menuItems[activeCategory].filter(item => item.id !== itemId)
        }
      };

      setMenuData(updatedMenuData);
      saveMenuData(updatedMenuData);
    }
  };

  const handleToggleActive = (itemId) => {
    const updatedMenuData = {
      ...menuData,
      menuItems: {
        ...menuData.menuItems,
        [activeCategory]: menuData.menuItems[activeCategory].map(item =>
          item.id === itemId ? { ...item, active: !item.active } : item
        )
      }
    };

    setMenuData(updatedMenuData);
    saveMenuData(updatedMenuData);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      description: '',
      image: '',
      category: activeCategory,
      active: true
    });
  };

  const saveMenuData = (data) => {
    // In a real app, this would save to a backend API
    // For now, we'll store in localStorage and update the JSON structure
    localStorage.setItem('menuData', JSON.stringify(data));
    console.log('Menu data saved:', data);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="staff-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <img src="/photos/logo/main_logo.png" alt="Blue Anchor Seafood" className="dashboard-logo" />
            <div>
              <h1 className="dashboard-title">Staff Dashboard</h1>
              <p className="dashboard-subtitle">Menu Management System</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="ghost" className="logout-btn">
            Logout
          </Button>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-nav">
          <h2 className="nav-title">Menu Categories</h2>
          {menuData.categories.map(category => (
            <button
              key={category.id}
              className={`category-nav-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.label}
              <span className="item-count">
                ({menuData.menuItems[category.id]?.length || 0})
              </span>
            </button>
          ))}
        </div>

        <div className="dashboard-content">
          <div className="content-header">
            <h2 className="content-title">
              {menuData.categories.find(cat => cat.id === activeCategory)?.icon}{' '}
              {menuData.categories.find(cat => cat.id === activeCategory)?.label}
            </h2>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="add-item-btn"
            >
              + Add New Item
            </Button>
          </div>

          {/* Add Form - only show for new items */}
          {showAddForm && (
            <Card className="item-form-card">
              <CardContent className="item-form">
                <h3 className="form-title">Add New Item</h3>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Item Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., Grilled Salmon"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Price *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Detailed description of the menu item..."
                      rows="3"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Image Path</label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="/photos/Category/image.jpg"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {menuData.categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-checkbox-label">
                      <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={handleInputChange}
                        className="form-checkbox"
                      />
                      Active (visible on menu)
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <Button
                    onClick={handleAddItem}
                    className="save-btn"
                  >
                    Add Item
                  </Button>
                  <Button
                    onClick={() => {
                      setShowAddForm(false);
                      resetForm();
                    }}
                    variant="ghost"
                    className="cancel-btn"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Menu Items Grid */}
          <div className="menu-items-grid">
            {menuData.menuItems[activeCategory]?.map(item => (
              <Card key={item.id} className={`menu-item-card ${!item.active ? 'inactive' : ''}`}>
                <CardContent className="menu-item-content">
                  <div className="item-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                      onError={(e) => {
                        e.target.src = '/photos/logo/main_logo.png';
                      }}
                    />
                    <div className="item-status">
                      {item.active ? '✅' : '❌'}
                    </div>
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">${item.price}</p>
                    <p className="item-description">{item.description}</p>
                    <p className="item-id">ID: {item.id}</p>
                  </div>

                  <div className="item-actions">
                    <Button
                      onClick={() => handleEditItem(item)}
                      size="sm"
                      className="edit-btn"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleToggleActive(item.id)}
                      size="sm"
                      variant={item.active ? "ghost" : "default"}
                      className="toggle-btn"
                    >
                      {item.active ? 'Hide' : 'Show'}
                    </Button>
                    <Button
                      onClick={() => handleDeleteItem(item.id)}
                      size="sm"
                      variant="destructive"
                      className="delete-btn"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {menuData.menuItems[activeCategory]?.length === 0 && (
            <div className="empty-state">
              <p>No items in this category yet.</p>
              <Button onClick={() => setShowAddForm(true)}>
                Add First Item
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Edit Item</h3>
              <button 
                className="modal-close" 
                onClick={() => setShowEditModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-content">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Item Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="e.g., Grilled Salmon"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Price *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Detailed description of the menu item..."
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Image Path</label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="/photos/Category/image.jpg"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    {menuData.categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-checkbox-label">
                    <input
                      type="checkbox"
                      name="active"
                      checked={formData.active}
                      onChange={handleInputChange}
                      className="form-checkbox"
                    />
                    Active (visible on menu)
                  </label>
                </div>
              </div>

              <div className="modal-actions">
                <Button
                  onClick={handleUpdateItem}
                  className="save-btn"
                >
                  Update Item
                </Button>
                <Button
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingItem(null);
                    resetForm();
                  }}
                  variant="ghost"
                  className="cancel-btn"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDashboard;