require("jquery-ui");
var $ = require("jquery");

export class settingsHandler {
  constructor(divToBindTo) {
    this.divToBindTo = divToBindTo;
    var self = this;
    this.serverRequest(function(result) {
      self.settingsArray = JSON.parse(result);
      //console.log(self.settingsArray);
      self.addHtml();
    });
  }
  addHtml() {
    var element = $(`
			<div style="padding: .75em;">
			 </div>
		    
		  `);
    var underTheFold = $(`<div class="ui grid content"></div>`);

    for (var i = 0; i < this.settingsArray.length; i++) {
      var dropDownBoxy = new dropDownBox(
        this.settingsArray[i].name,
        this.settingsArray[i].options,
        this.settingsArray[i].defaultVal,
        underTheFold
      );

      var self = this;
      dropDownBoxy.attachOnChange(function() {
        self.settingsClicked();
      });
      this.settingsArray[i].settingsDropDown = dropDownBoxy;
    }
    element.append(underTheFold);
    this.divToBindTo.append(element);
  }
  serverRequest(callback) {
    $.ajax({
      type: "GET",
      url: "/getMenuSettings",
      success: function(data) {
        callback(data);
      },
      error: function() {
        callback(false);
      },
      contentType: "application/json"
    });
  }
  getValues() {
    for (var i = 0; i < this.settingsArray.length; i++) {
      this.settingsArray[i].val = this.settingsArray[
        i
      ].settingsDropDown.getValue();
    }
    //console.log(this.settingsArray);
    return this.settingsArray;
  }
  attachOnSettingsClick(callback) {
    //deprecated as of rn
    this.settingsClicked = callback;
  }
}
class dropDownBox {
  constructor(name, options, defaultVal, divToBindTo) {
    this.options = options;
    this.name = name;
    this.divToBindTo = divToBindTo;
    this.defaultVal = defaultVal;
    this.addHtml();
  }
  addHtml() {
    this.outer = $(`<div class="ui selection transition dropdown" style="
			    background-color: transparent;
			    border: 2px solid white;
			    color: white;
			    margin-top: 10px;
			    margin-left:10px;
			">
			<input type="hidden">
		  	
		  	<div class="default text" style="color:white;">${this.name}</div>
		  	<i class="dropdown icon"></i>

		</div>`);

    this.inner = $(`<div class="menu transition hidden" ></div>`);
    for (var i = 0; i < this.options.length; i++) {
      this.inner.append(
        `<div class="item" data-value="${this.options[i].val}">${
          this.options[i].name
        }</div>`
      );
    }

    var self = this;
    this.inner.on("click", function() {
      self.onChange();
    });
    this.outer.append(this.inner);
    this.outer.dropdown();
    this.outer.dropdown("set value", this.defaultVal);

    this.divToBindTo.append(this.outer);
  }
  getValue() {
    return this.outer.dropdown("get value");
  }
  attachOnChange(callback) {
    this.onChange = callback;
  }
}
