import React, { Component } from "react";
import DynamicForm from "./ChildForm";
import fileXml from "../cobaparserxml/model.xml";

class ParentForm extends Component {
  state = {
    data: [
      { id: 1, name: "a", age: 29, qualification: "S.Kom", rating: 3 },
      { id: 2, name: "b", age: 28, qualification: "ST", rating: 4 },
      { id: 3, name: "c", age: 30, qualification: "A.Md", rating: 5 }
    ],
    modele: [
      { key: "name", label: "Name", props: { required: true } },
      { key: "age", label: "Age", type: "number" },
      {
        key: "rating",
        label: "Rating",
        type: "number",
        props: { min: 0, max: 5 }
      },
      { key: "qualification", label: "Qualification" }
    ],
    isixml: "",
    parsexml: ""
  };

  componentDidMount() {
    this.getXML();
  }

  getXML = async () => {
    var xml2js = require("xml2js");

    await fetch(fileXml)
      .then(response => response.text())
      .then(response => {
        console.log(response);
        this.setState({ isixml: response });
      })
      .then(() => {
        console.log("done");
      })
      .catch(err => {
        console.log("fetch", err);
      });

    var xml = this.state.isixml;

    // console.log(this.state.isixml);

    var extractedData;
    var parser = new xml2js.Parser();
    parser.parseString(xml, function(err, result) {
      //Extract the value from the data element

      extractedData = result["root"]["element"];
      console.log(extractedData);
    });
    // console.log(extractedData);
    this.setState({ parsexml: extractedData });
    // console.log(this.state.parsexml);
    console.log(this.state.modele);
  };

  onSubmit2 = model => {
    model.id = +new Date();
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    });
  };

  onSubmit = model => {
    var url = "http://10.10.18.199:3000/?tableName=user";
    // alert(JSON.stringify(model));

    fetch(url, {
      method: "POST",
      body: JSON.stringify(model),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log("Status:", JSON.stringify(response));
        if (response.status == "200") {
          alert("Success");
        } else {
          alert("Failed");
        }
      });
  };

  render() {
    var xmlmodel = this.state.parsexml || [{ key: "", label: "" }];
    return (
      <React.Fragment>
        <div>{console.log("hello")}</div>

        <DynamicForm
          title="Registration"
          model={xmlmodel}
          // model={this.state.modele}
          // model={this.state.modele}
          onSubmit={model => {
            this.onSubmit2(model);
          }}
        />
        <pre>{JSON.stringify(this.state.data)}</pre>
      </React.Fragment>
    );
  }
}

export default ParentForm;
