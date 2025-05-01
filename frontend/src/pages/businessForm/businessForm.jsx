import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./businessForm.module.css"; // Update with actual path
import { AlertCircle } from "lucide-react";

export default function BusinessForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    instagramHashtag: "",
    targetAudience: "",
    marketingGoal: "",
    brandTone: "",
  });

  const [errors, setErrors] = useState({
    businessName: false,
    industry: false,
    instagramHashtag: false,
    targetAudience: false,
    marketingGoal: false,
    brandTone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "instagramHashtag" && value.startsWith("#")
          ? value.substring(1)
          : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      businessName: !formData.businessName.trim(),
      industry: !formData.industry.trim(),
      instagramHashtag: !formData.instagramHashtag.trim(),
      targetAudience: !formData.targetAudience.trim(),
      marketingGoal: !formData.marketingGoal.trim(),
      brandTone: !formData.brandTone.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // navigate("/dashboard");
    }
  };

  const renderInput = (id, label, placeholder) => (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={formData[id]}
        onChange={handleChange}
        placeholder={placeholder}
        aria-invalid={errors[id]}
      />
      {errors[id] && (
        <p className={styles.errorText}>
          <AlertCircle size={16} className={styles.errorIcon} /> {label} is
          required
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {renderInput("businessName", "Business Name", "Enter your business name")}
      {renderInput("industry", "Industry", "e.g., makeup, construction")}
      <div className={styles.inputGroup}>
        <label htmlFor="instagramHashtag" className={styles.label}>
          Main Instagram Hashtag
        </label>
        <div className={styles.hashtagWrapper}>
          <span className={styles.hash}>#</span>
          <input
            id="instagramHashtag"
            name="instagramHashtag"
            value={formData.instagramHashtag}
            onChange={handleChange}
            placeholder="e.g., makeup"
            aria-invalid={errors.instagramHashtag}
          />
        </div>
        {errors.instagramHashtag && (
          <p className={styles.errorText}>
            <AlertCircle size={16} className={styles.errorIcon} /> Instagram
            hashtag is required
          </p>
        )}
      </div>
      {renderInput("targetAudience", "Target Audience", "e.g., Gen Z women")}
      {renderInput(
        "marketingGoal",
        "Marketing Goal",
        "e.g., engagement, leads"
      )}
      {renderInput("brandTone", "Brand Tone", "e.g., fun, professional")}
      <button type="submit" className={styles.submitBtn}>
        Continue
      </button>
    </form>
  );
}
