var folder = "public/images/";

function portfolio(folder_name) {
    folder += folder_name + "/";
    $.ajax({
        url: folder,
        success: function(data) {
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