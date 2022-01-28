// Append the option elements

var html5Slider = document.getElementById("html5");
var select = document.getElementById("input-select");

noUiSlider.create(html5Slider, {
  start: [1, 2],
  // tooltips: true,
  behaviour: "drag-tap",
  step: 1,
  connect: true,
  range: {
    min: 1,
    max: 20,
  },
});

var inputNumber = document.getElementById("input-number");

function on_start() {
  var current_date_range = html5Slider.noUiSlider.get();
  // console.log(current_date_range);
  var array_date_range = range(
    parseInt(current_date_range[0]),
    parseInt(current_date_range[1])
  );
  var th = create_for(array_date_range);
  // console.log(th);
  agg_slider(th);
}

html5Slider.noUiSlider.on("change", function (values, handle) {
  var current_date_range = html5Slider.noUiSlider.get();
  console.log(current_date_range);
  var array_date_range = range(
    parseInt(current_date_range[0]),
    parseInt(current_date_range[1])
  );
  // var th = create_for(array_date_range);

  agg_slider();
});

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

function agg_slider() {
  //  it comes here once you click the checkbox
  var current_date_range = html5Slider.noUiSlider.get();
  console.log(current_date_range);
  var array_date_range = range(
    parseInt(current_date_range[0]),
    parseInt(current_date_range[1])
  ); // this gets us the current range needed
  console.log("the array range", array_date_range);

  k = create_new_data(array_date_range);

  j = create_new_data1(array_date_range);
  console.log(k);
  var th = create_for(array_date_range);
  var th1 = create_for_commits(array_date_range);

  f = merge_all_jsons(k[0], k[1]);
  //
  // var g = create_network_data(array_date_range);

  makeButtons(array_date_range);
  var o_p = merge_all_jsons_2(j[0], j[1]);
  console.log(o_p);
  $("#chk").prop("checked", false);
  Update_Email_Range_Slider(f);
  Update_Tech_Range_Slider(o_p);
  make_chart_alt();
  query_buttons();
}

function get_all_data_for_net() {
  var current_date_range = html5Slider.noUiSlider.get();
  console.log(current_date_range);
  var array_date_range = range(
    parseInt(current_date_range[0]),
    parseInt(current_date_range[1])
  );
  create_new_data_force_net(array_date_range);
}

function updateSliderRange(min, max) {
  html5Slider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
  });
}
