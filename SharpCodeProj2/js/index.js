$("document").ready(function () {
  $(".first-table").hide();
  $(".second-table").hide();
  $(".third-table").hide();
  $(".fourth-table").hide();
  

  $(document).on("change", "#select-menu", function () {
    if ($(this).val() == "Exploratory Activities") {
      $(".first-table").show();
      $(".second-table").hide();
      $(".third-table").hide();
      $(".fourth-table").hide();
    } else if ($(this).val() == "Development in View") {
      $(".second-table").show();
      $(".first-table").hide();
      $(".third-table").hide();
      $(".fourth-table").hide();
    } else if ($(this).val() == "Please select service") {
      $(".first-table").hide();
      $(".second-table").hide();
      $(".third-table").hide();
      $(".fourth-table").hide();
    } else if ($(this).val() == "Development in Progress") {
      $(".first-table").hide();
      $(".second-table").hide();
      $(".third-table").show();
      $(".fourth-table").hide();
    } else if ($(this).val() == "Development To Be Improved") {
      $(".first-table").hide();
      $(".second-table").hide();
      $(".third-table").hide();
      $(".fourth-table").show();
    }
  });

  $("input[name='phone']").keyup(function() {
    $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "($1)$2-$3"));
  });
  debugger
  $("#logout").on('click', function() {
    debugger
    var text = "You canceled the logout request";
    
    if(confirm("Are you sure you want to logout?")){
      window.location.href = "http://127.0.0.1:5502/index.html";
    }else {
      text
    }
    
 });

  $(".save").change(function () {
    $(".save").not(this).prop("checked", false);
  });
  var myValue = "";
  $("#null1").prop("disabled", true);
  $("#null2").prop("disabled", true);
  $("#null3").prop("disabled", true);
  $("#null4").prop("disabled", true);
  $("#null5").prop("disabled", true);
  $('input:radio[id="first"]').change(function () {
    if ($(this).is(":checked")) {
      $("#null1").prop("disabled", false);
      $("#null2").prop("disabled", true);
      $("#null3").prop("disabled", true);
      $("#null4").prop("disabled", true);
      $("#null5").prop("disabled", true);

      var a = $(".calc").val();
      var b = $(".luck").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".output").html("<p>" + d + "</p>");
      $(".output-value").html("<p>" + myValue + "</p>");
      $(".output-val1").html("<p>" + myValue + "</p>");
      $(".output-val2").html("<p>" + myValue + "</p>");
      $(".output-val3").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".luck").on("focusout", function () {
        b = $(".luck").val();
        a = $(".calc").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".output").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    }
  });

  $('input:radio[id="second"]').change(function () {
    if ($(this).is(":checked")) {
      $("#null1").prop("disabled", true);
      $("#null2").prop("disabled", false);
      $("#null3").prop("disabled", true);
      $("#null4").prop("disabled", true);
      $("#null5").prop("disabled", true);
      var a = $(".calculate").val();
      var b = $(".lucky").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".output-value").html("<p>" + d + "</p>");
      $(".output").html("<p>" + myValue + "</p>");
      $(".output-val1").html("<p>" + myValue + "</p>");
      $(".output-val2").html("<p>" + myValue + "</p>");
      $(".output-val3").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".lucky").on("focus", function () {
        b = $(".lucky").val();
        a = $(".calculate").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".output-value").html("<p>" + d + "</p>");

        $("#amount-to-pay").attr("placeholder", d);
      });
    }
  });
  $('input:radio[id="third"]').change(function () {
    if ($(this).is(":checked")) {
      $("#null1").prop("disabled", true);
      $("#null2").prop("disabled", true);
      $("#null3").prop("disabled", false);
      $("#null4").prop("disabled", true);
      $("#null5").prop("disabled", true);
      var a = $(".calculate1").val();
      var b = $(".input1").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".output-val1").html("<p>" + d + "</p>");
      $(".output").html("<p>" + myValue + "</p>");
      $(".output-value").html("<p>" + myValue + "</p>");
      $(".output-val2").html("<p>" + myValue + "</p>");
      $(".output-val3").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".input1").on("focusout", function () {
        b = $(".input1").val();
        a = $(".calculate1").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".output-val1").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    }
  });
  $('input:radio[id="fourth"]').change(function () {
    if ($(this).is(":checked")) {
      $("#null1").prop("disabled", true);
      $("#null2").prop("disabled", true);
      $("#null3").prop("disabled", true);
      $("#null4").prop("disabled", false);
      $("#null5").prop("disabled", true);
      var a = $(".calculate2").val();
      var b = $(".luck3").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".output-val2").html("<p>" + d + "</p>");
      $(".output").html("<p>" + myValue + "</p>");
      $(".output-val1").html("<p>" + myValue + "</p>");
      $(".output-value").html("<p>" + myValue + "</p>");
      $(".output-val3").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".luck3").on("focusout", function () {
        b = $(".luck3").val();
        a = $(".calculate2").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".output-val2").html("<p>" + a * b + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    }
  });
  $('input:radio[id="fifth"]').change(function () {
    if ($(this).is(":checked")) {
      $("#null1").prop("disabled", true);
      $("#null2").prop("disabled", true);
      $("#null3").prop("disabled", true);
      $("#null4").prop("disabled", true);
      $("#null5").prop("disabled", false);
      var a = $(".calculate3").val();
      var b = $(".luck4").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".output-val3").html("<p>" + d + "</p>");
      $(".output").html("<p>" + myValue + "</p>");
      $(".output-val1").html("<p>" + myValue + "</p>");
      $(".output-val2").html("<p>" + myValue + "</p>");
      $(".output-value").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".luck4").on("focusout", function () {
        b = $(".luck4").val();
        a = $(".calculate3").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".output-val3").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    }
  });
  $("#null6").prop("disabled", true);
  $("#null7").prop("disabled", true);
  $("#null8").prop("disabled", true);
  $("#null9").prop("disabled", true);
  $("#null10").prop("disabled", true);
  $("#null11").prop("disabled", true);
  $("#null12").prop("disabled", true);
  $("#null13").prop("disabled", true);
  $("#null14").prop("disabled", true);
  $("#null15").prop("disabled", true);
  $("#null16").prop("disabled", true);
  $("#null17").prop("disabled", true);
  $("#null18").prop("disabled", true);
  $("#null19").prop("disabled", true);
  $("#null20").prop("disabled", true);
  $(".save").change(function () {
    if ($("#a").is(":checked")) {
      $("#null6").prop("disabled", false);
      $("#null7").prop("disabled", true);
      $("#null8").prop("disabled", true);
      $("#null9").prop("disabled", true);
      $("#null10").prop("disabled", true);
      var a = $(".val1").val();
      var b = $(".hold1").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out1").html("<p>" + d + "</p>");
      $(".out2").html("<p>" + myValue + "</p>");
      $(".out3").html("<p>" + myValue + "</p>");
      $(".out4").html("<p>" + myValue + "</p>");
      $(".out5").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold1").on("focusout", function () {
        b = $(".hold1").val();
        a = $(".val1").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out1").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#b").is(":checked")) {
      $("#null6").prop("disabled", true);
      $("#null7").prop("disabled", false);
      $("#null8").prop("disabled", true);
      $("#null9").prop("disabled", true);
      $("#null10").prop("disabled", true);
      var a = $(".val2").val();
      var b = $(".hold2").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out2").html("<p>" + d + "</p>");
      $(".out1").html("<p>" + myValue + "</p>");
      $(".out3").html("<p>" + myValue + "</p>");
      $(".out4").html("<p>" + myValue + "</p>");
      $(".out5").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold2").on("focusout", function () {
        b = $(".hold2").val();
        a = $(".val2").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out2").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#c").is(":checked")) {
      $("#null6").prop("disabled", true);
      $("#null7").prop("disabled", true);
      $("#null8").prop("disabled", false);
      $("#null9").prop("disabled", true);
      $("#null10").prop("disabled", true);
      var a = $(".val3").val();
      var b = $(".hold3").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out3").html("<p>" + d + "</p>");
      $(".out1").html("<p>" + myValue + "</p>");
      $(".out2").html("<p>" + myValue + "</p>");
      $(".out4").html("<p>" + myValue + "</p>");
      $(".out5").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold3").on("focusout", function () {
        b = $(".hold3").val();
        a = $(".val3").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out3").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#d").is(":checked")) {
      $("#null6").prop("disabled", true);
      $("#null7").prop("disabled", true);
      $("#null8").prop("disabled", true);
      $("#null9").prop("disabled", false);
      $("#null10").prop("disabled", true);
      var a = $(".val4").val();
      var b = $(".hold4").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out4").html("<p>" + d + "</p>");
      $(".out1").html("<p>" + myValue + "</p>");
      $(".out2").html("<p>" + myValue + "</p>");
      $(".out3").html("<p>" + myValue + "</p>");
      $(".out5").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold4").on("focusout", function () {
        b = $(".hold4").val();
        a = $(".val4").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out4").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#e").is(":checked")) {
      $("#null6").prop("disabled", true);
      $("#null7").prop("disabled", true);
      $("#null8").prop("disabled", true);
      $("#null9").prop("disabled", true);
      $("#null10").prop("disabled", false);
      var a = $(".val5").val();
      var b = $(".hold5").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out5").html("<p>" + d + "</p>");
      $(".out1").html("<p>" + myValue + "</p>");
      $(".out2").html("<p>" + myValue + "</p>");
      $(".out3").html("<p>" + myValue + "</p>");
      $(".out4").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold5").on("focusout", function () {
        b = $(".hold5").val();
        a = $(".val5").val();
        var d = parseInt(c).toLocaleString();
        $(".out5").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#f").is(":checked")) {
      $("#null11").prop("disabled", false);
      $("#null12").prop("disabled", true);
      $("#null13").prop("disabled", true);
      $("#null14").prop("disabled", true);
      $("#null15").prop("disabled", true);
      var a = $(".val6").val();
      var b = $(".hold6").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out6").html("<p>" + d + "</p>");
      $(".out7").html("<p>" + myValue + "</p>");
      $(".out8").html("<p>" + myValue + "</p>");
      $(".out9").html("<p>" + myValue + "</p>");
      $(".out10").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold6").on("focusout", function () {
        b = $(".hold6").val();
        a = $(".val6").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out6").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#g").is(":checked")) {
      $("#null11").prop("disabled", true);
      $("#null12").prop("disabled", false);
      $("#null13").prop("disabled", true);
      $("#null14").prop("disabled", true);
      $("#null15").prop("disabled", true);
      var a = $(".val7").val();
      var b = $(".hold7").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out7").html("<p>" + d + "</p>");
      $(".out6").html("<p>" + myValue + "</p>");
      $(".out8").html("<p>" + myValue + "</p>");
      $(".out9").html("<p>" + myValue + "</p>");
      $(".out10").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold7").on("focusout", function () {
        b = $(".hold7").val();
        a = $(".val7").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out7").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#h").is(":checked")) {
      $("#null11").prop("disabled", true);
      $("#null12").prop("disabled", true);
      $("#null13").prop("disabled", false);
      $("#null14").prop("disabled", true);
      $("#null15").prop("disabled", true);
      var a = $(".val8").val();
      var b = $(".hold8").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out8").html("<p>" + d + "</p>");
      $(".out6").html("<p>" + myValue + "</p>");
      $(".out7").html("<p>" + myValue + "</p>");
      $(".out9").html("<p>" + myValue + "</p>");
      $(".out10").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold8").on("focusout", function () {
        b = $(".hold8").val();
        a = $(".val8").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out8").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#i").is(":checked")) {
      $("#null11").prop("disabled", true);
      $("#null12").prop("disabled", true);
      $("#null13").prop("disabled", true);
      $("#null14").prop("disabled", false);
      $("#null15").prop("disabled", true);
      var a = $(".val9").val();
      var b = $(".hold9").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out9").html("<p>" + d + "</p>");
      $(".out6").html("<p>" + myValue + "</p>");
      $(".out7").html("<p>" + myValue + "</p>");
      $(".out8").html("<p>" + myValue + "</p>");
      $(".out10").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold9").on("focusout", function () {
        b = $(".hold9").val();
        a = $(".val9").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out9").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#j").is(":checked")) {
      $("#null11").prop("disabled", true);
      $("#null12").prop("disabled", true);
      $("#null13").prop("disabled", true);
      $("#null14").prop("disabled", true);
      $("#null15").prop("disabled", false);
      var a = $(".val10").val();
      var b = $(".hold10").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out10").html("<p>" + d + "</p>");
      $(".out6").html("<p>" + myValue + "</p>");
      $(".out7").html("<p>" + myValue + "</p>");
      $(".out8").html("<p>" + myValue + "</p>");
      $(".out9").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold10").on("focusout", function () {
        b = $(".hold10").val();
        a = $(".val10").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out10").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#k").is(":checked")) {
      $("#null16").prop("disabled", false);
      $("#null17").prop("disabled", true);
      $("#null18").prop("disabled", true);
      $("#null19").prop("disabled", true);
      $("#null20").prop("disabled", true);
      var a = $(".val11").val();
      var b = $(".hold11").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out11").html("<p>" + d + "</p>");
      $(".out12").html("<p>" + myValue + "</p>");
      $(".out13").html("<p>" + myValue + "</p>");
      $(".out14").html("<p>" + myValue + "</p>");
      $(".out15").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold11").on("focusout", function () {
        b = $(".hold11").val();
        a = $(".val11").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out11").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#l").is(":checked")) {
      $("#null16").prop("disabled", true);
      $("#null17").prop("disabled", false);
      $("#null18").prop("disabled", true);
      $("#null19").prop("disabled", true);
      $("#null20").prop("disabled", true);
      var a = $(".val12").val();
      var b = $(".hold12").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out12").html("<p>" + d + "</p>");
      $(".out11").html("<p>" + myValue + "</p>");
      $(".out13").html("<p>" + myValue + "</p>");
      $(".out14").html("<p>" + myValue + "</p>");
      $(".out15").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold12").on("focusout", function () {
        b = $(".hold12").val();
        a = $(".val12").val();
        var d = parseInt(c).toLocaleString();
        $(".out12").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#m").is(":checked")) {
      $("#null16").prop("disabled", true);
      $("#null17").prop("disabled", true);
      $("#null18").prop("disabled", false);
      $("#null19").prop("disabled", true);
      $("#null20").prop("disabled", true);
      var a = $(".val13").val();
      var b = $(".hold13").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out13").html("<p>" + d + "</p>");
      $(".out11").html("<p>" + myValue + "</p>");
      $(".out12").html("<p>" + myValue + "</p>");
      $(".out14").html("<p>" + myValue + "</p>");
      $(".out15").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold13").on("focusout", function () {
        b = $(".hold13").val();
        a = $(".val13").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out13").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#n").is(":checked")) {
      $("#null16").prop("disabled", true);
      $("#null17").prop("disabled", true);
      $("#null18").prop("disabled", true);
      $("#null19").prop("disabled", false);
      $("#null20").prop("disabled", true);
      var a = $(".val14").val();
      var b = $(".hold14").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out14").html("<p>" + d + "</p>");
      $(".out11").html("<p>" + myValue + "</p>");
      $(".out12").html("<p>" + myValue + "</p>");
      $(".out13").html("<p>" + myValue + "</p>");
      $(".out15").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold14").on("focusout", function () {
        b = $(".hold14").val();
        a = $(".val14").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out14").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    } else if ($("#o").is(":checked")) {
      $("#null16").prop("disabled", true);
      $("#null17").prop("disabled", true);
      $("#null18").prop("disabled", true);
      $("#null19").prop("disabled", true);
      $("#null20").prop("disabled", false);
      var a = $(".val15").val();
      var b = $(".hold15").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      $(".out15").html("<p>" + d + "</p>");
      $(".out11").html("<p>" + myValue + "</p>");
      $(".out12").html("<p>" + myValue + "</p>");
      $(".out13").html("<p>" + myValue + "</p>");
      $(".out14").html("<p>" + myValue + "</p>");
      $("#amount-to-pay").attr("placeholder", d);
      $(".hold15").on("focusout", function () {
        b = $(".hold15").val();
        a = $(".val15").val();
        var c = a * b;
        var d = parseInt(c).toLocaleString();
        $(".out15").html("<p>" + d + "</p>");
        $("#amount-to-pay").attr("placeholder", d);
      });
    }
  });
  
  $(".dissappear").hide();
  $("#submit").on("click", function () {
    // debugger;
    if ($("#first").is(":checked")) {
      // debugger;

      var a = $(".calc").val();
      var b = $(".luck").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val(); 
      var customerId = $(".gudluck").text();
      var state = $( "#select-us option:selected" ).text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html("<h2>" + " Service Name:" + customerId + "</h2>");
      $(".paid").html(`<h2>Amount Paid: ${d} </h2>`);
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      $(".state").html(`<h2>State: ${state}</h2>`);


      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#second").is(":checked")){
      var a = $(".calculate").val();
      var b = $(".lucky").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck2").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#third").is(":checked")){
      var a = $(".calculate1").val();
      var b = $(".input1").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck3").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#fourth").is(":checked")){
      var a = $(".calculate2").val();
      var b = $(".luck3").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck4").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#fifth").is(":checked")){
      var a = $(".calculate3").val();
      var b = $(".luck4").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck5").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if ($("#a").is(":checked")){
      var a = $(".val1").val();
      var b = $(".hold1").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck6").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#b").is(":checked")){
      var a = $(".val2").val();
      var b = $(".hold2").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck7").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#c").is(":checked")){
      var a = $(".val3").val();
      var b = $(".hold3").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck8").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#d").is(":checked")){
      var a = $(".val4").val();
      var b = $(".hold4").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck9").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#f").is(":checked")){
      var a = $(".val6").val();
      var b = $(".hold6").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck10").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#g").is(":checked")){
      var a = $(".val7").val();
      var b = $(".hold7").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck11").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#h").is(":checked")){
      var a = $(".val8").val();
      var b = $(".hold8").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck12").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#k").is(":checked")){
      var a = $(".val11").val();
      var b = $(".hold11").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck13").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }else if($("#l").is(":checked")){
      var a = $(".val12").val();
      var b = $(".hold12").val();
      var c = a * b;
      var d = parseInt(c).toLocaleString();

      var customerId = $(".gudluck14").text();
      $(".success").html(`<h1> Success </h1>`);
      $(".service-name").html(`<h2> Service Name: ${customerId}</h2>`);
      $(".paid").html(`<h2>Amount Paid: ${d}</h2>`);
      var phone = $("#phone").val().replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1-$2-$3');
      var name = $("#payer-name").val();
      $(".phone").html(`<h2>Phone: ${phone}</h2>`);
      $(".name-hold").html(`<h2>Name: ${name}</h2>`);
      var state = $( "#select-us option:selected" ).text();
      $(".state").html(`<h2>State: ${state}</h2>`);

      // $("#amount-to-pay").val();
      $(".dissappear").show();
      $(".input-part").hide();
      $(".button-me").hide();
    }
  });
  $("#back").on("click", function(){
    window.location.href = "http://127.0.0.1:5502/dashboard.html";
  })
});

