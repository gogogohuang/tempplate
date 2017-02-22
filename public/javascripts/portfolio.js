/*var folder = "https://gogogohuang.github.io/public/images/";

function portfolio(folder_name) {
    folder += folder_name + "/";
    $.ajax({
        url: folder,
        type: "GET",
        complete: function(data) {
            console.log("5566");
            var patt1 = /"([^"]*\.(jpe?g|png|gif))"/gi; // extract "*.jpeg" or "*.jpg" or "*.png" or "*.gif"
            var result = data.match(patt1);
            result = result.map(function(el) { return el.replace(/"/g, ""); }); // remove double quotes (") surrounding filename+extension // TODO: do this at regex!

            var uniqueNames = []; // this array will help to remove duplicate images
            $.each(result, function(i, el) {
                var el_url_encoded = encodeURIComponent(el); // avoid images with same name but converted to URL encoded
                console.log("under analysis: " + el);
                console.log("el_url_encoded is " + el_url_encoded);
                if ($.inArray(el, uniqueNames) === -1 && $.inArray(el_url_encoded, uniqueNames) === -1) {
                    console.log("adding " + el_url_encoded);
                    uniqueNames.push(el_url_encoded);
                    $("#slider").append("<img src='" + folder + el_url_encoded + "' alt=''>"); // finaly add to HTML
                } else { console.log(el_url_encoded + " already in!"); }
            });
        },
        error: function(xhr, textStatus, err) {
            alert('Error: here we go...');
            alert(textStatus);
            alert(err);
            alert("readyState: " + xhr.readyState + "\n xhrStatus: " + xhr.status);
            alert("responseText: " + xhr.responseText);
        }
    });
}
*/

var base_folder = "../public/images/"
var portfolioimages = ["pomelo", "strangers", "thailand", "alice", "animal", "wedding", "kailash", "india", "nepal", "yangon", "mandalay"];
var portfolioimagesNum = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

function showPhoto(idname) {
    $("html, body").animate({ scrollTop: 0 }, 600);

    for (i in portfolioimages) {
        if (portfolioimages[i] === idname) {
            $('#' + portfolioimages[i]).css('display', 'block');
        } else {
            $('#' + portfolioimages[i]).css('display', 'none');
        }
    }
}

function portfolio(folder_name) {
    var folder = base_folder + folder_name + "/";
    var fileextension = ".jpg"; // image format
    for (i in portfolioimages) {

        var newNode = document.createElement('div');
        newNode.className = 'portfolioThumbs';
        document.getElementsByClassName("pt-container")[0].appendChild(newNode);


        newNode = document.createElement('img');
        newNode.className = 'portfolioThumbs-img';
        newNode.alt = '';
        newNode.src = folder + portfolioimages[i] + fileextension;
        //newNode.id = portfolioimages[i];
        newNode.setAttribute('onclick', 'showPhoto("' + portfolioimages[i] + '")');

        document.getElementsByClassName("portfolioThumbs")[i].appendChild(newNode);

        newNode = document.createElement('div');
        newNode.className = 'portfolioThumbs-titile';
        newNode.innerHTML = portfolioimages[i][0].toUpperCase() + portfolioimages[i].slice(1);
        newNode.id = portfolioimages[i];
        newNode.setAttribute('onclick', 'showPhoto("' + portfolioimages[i] + '")');


        document.getElementsByClassName("portfolioThumbs")[i].appendChild(newNode);

    }
}

function photopage() {
    var fileextension = ".jpg"; // image format
    for (i in portfolioimages) {
        var newNode = document.createElement('div');
        newNode.className = 'portfolioContent';
        newNode.id = portfolioimages[i];
        document.getElementsByClassName("portfolioThumbs-content")[0].appendChild(newNode);

    }

    for (i in portfolioimages) {
        var folder = base_folder + portfolioimages[i] + "/";

        var newNode = document.createElement('div');

        newNode = document.createElement('div');
        newNode.className = 'portfolioContent-title';
        newNode.innerHTML = "<h2>" + portfolioimages[i][0].toUpperCase() + portfolioimages[i].slice(1) + "</h2>";
        document.getElementById(portfolioimages[i]).appendChild(newNode);
        newNode = document.createElement('div');
        newNode.className = 'portfolioContent-line';
        document.getElementById(portfolioimages[i]).appendChild(newNode);

        newNode = document.createElement('div');
        newNode.className = 'portfolioContent-blank';
        document.getElementById(portfolioimages[i]).appendChild(newNode);


        for (var j = 1; j <= portfolioimagesNum[i]; j++) {
            newNode = document.createElement('div');
            newNode.className = 'portfolioContent-images';
            newNode.innerHTML =
                "<a class=\'venobox vbox-item\', data-gall=\'" + portfolioimages[i] + "\', href=" + folder + j + fileextension + ">" +
                "<img class=\'lazy\' data-original=" + folder + j + fileextension + ">";
            document.getElementById(portfolioimages[i]).appendChild(newNode);
            ``
        }

    }

}