function DonateButton(container) {

  function initEventListeners() {
    container.find(".button-donate").click(function () {
      var selectedOption = container.find("input[type=radio]:checked");
      location.href = selectedOption.val();
    });
  }

  return {
    render: function () {
      initEventListeners();
    }
  };
}

