import React, { useState, useEffect } from "react";
import Table from "./Table";
import Filters from "./Filetrs";
import FormInput from "./FormInput";
const Form = () => {
  const [form, setForm] = useState({});
  const [showData, setData] = useState([]);
  const [filterBy, setFilterBy] = React.useState("");
  const handleOnChange = (e) => {
    let { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, [name]: files });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    setData([...showData, { ...form }]);
    setForm({});
  };
  useEffect(() => {
    console.log(showData);
  }, [showData]);

  const filters = {
    1: "salary Low to High",
    2: "Salary High to Low"
  };

  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "1": {
        setFilterBy("1");
        showData.sort((a, b) => a.salary - b.salary);
        setData([...showData]);
        break;
      }
      case "2": {
        setFilterBy("2");
        showData.sort((a, b) => b.salary - a.salary);
        setData([...showData]);
        break;
      }
      default: {
        setData(showData);
        break;
      }
    }
  };

  const deleteData = (value) => {
    setData(showData.filter((todo) => todo !== value));
  };
  return (
    <div>
      <FormInput
        onSubmitHandle={onSubmitHandle}
        handleOnChange={handleOnChange}
      />
      <br />
      <Filters
        filters={filters}
        currentFilteredBy={filterBy}
        updateFilter={updateFilter}
      />
      <Table showData={showData} deleteData={deleteData} />
    </div>
  );
};
export default Form;
