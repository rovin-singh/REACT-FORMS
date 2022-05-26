import React from "react";

const FormInput = ({ onSubmitHandle, handleOnChange }) => {
  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <div className={StyleSheet.formData}>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleOnChange}
          />
        </div>
        <div className={StyleSheet.formData}>
          <label>Age : </label>
          <input
            type="number"
            name="age"
            placeholder="Enter Your Age"
            onChange={handleOnChange}
          />
        </div>
        <div className={StyleSheet.formData}>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address"
            onChange={handleOnChange}
          />
        </div>
        <div className={StyleSheet.formData}>
          <label>Salary : </label>
          <input
            type="number"
            name="salary"
            placeholder="Enter Your Salary"
            onChange={handleOnChange}
          />
        </div>
        <div className={StyleSheet.formData}>
          <label>Department : </label>
          <select name="Department" onChange={handleOnChange}>
            <option value=""></option>
            <option value="CSE">CSE</option>
            <option value="Non-CSE">Non CSE</option>
          </select>
        </div>
        <div className={StyleSheet.formData}>
          <input
            type="checkbox"
            name="Marriage_Status"
            onChange={handleOnChange}
          />
          <label>Married</label>
          <input
            type="checkbox"
            name="Marriage_Status"
            onChange={handleOnChange}
          />
          <label>Single</label>
        </div>
        <div className={StyleSheet.formData}>
          <input type="file" name="profile_photo" onChange={handleOnChange} />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default FormInput;
