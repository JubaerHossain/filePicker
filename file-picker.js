(function ($) {
    "use strict";
    var ADDICON =
        "data:image/png;base64,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";
    $.fn.jubaerImagePicker = function (options) {
        var count = 0;
        var last_index = 0;
        var total_count = 0;
        var imageLoad = options.defaultImage
            ? { image: options.defaultImage, width: "100%" }
            : { image: ADDICON, width: "64px" };

        var defaults = {
            fieldName: "",
            groupClassName: "col-md-4 col-sm-4 col-xs-6",
            rowHeight: "200px",
            dropFileLabel: "Drop file here",
            placeholderImage: imageLoad,
            placeholderWidth: "64px",
            maxCount: "",
            maxFileSize: "",
            defaultImage: "",
            allowedExt: "png|jpg|jpeg|gif|svg",
            onAddRow: function () {},
            onRenderedPreview: function () {},
            onRemoveRow: function () {},
            onExtensionErr: function () {},
            onSizeErr: function () {},
            directUpload: {
                loaderIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>`,
                status: false,
                url: "",
                success: function () {},
                error: function () {},
            },
        };

        var settings = $.extend({}, defaults, options);

        /**
         * CALLED ON IMAGE SUCCESS RENDERED AND ADD NEW IMAGE
         * @param {[type]} settings [description]
         * @param {[type]} el       [description]
         */
        function addRow(settings, el) {

            last_index = count;
            var groupClassName = settings.groupClassName,
                rowHeight = settings.rowHeight,
                fieldName = settings.fieldName,
                placeholderImage = settings.placeholderImage;
            var placeholderImageTarget = placeholderImage?.image
                ? placeholderImage.image
                : ADDICON;
            var placeholderImageWidth = placeholderImage?.width
                ? placeholderImage.width
                : "64px";

            var uploadLoaderIcon = '<i class="fas fa-sync fa-spin"></i>';
            if (typeof settings.directUpload.loaderIcon != "undefined") {
                uploadLoaderIcon = settings.directUpload.loaderIcon;
            }
            var template =
                `<div class="${groupClassName} jubaer_item_wrapper" data-jubaerindexrow="${count}" style="margin-bottom : 20px; ">` +
                    `<div style="position: relative;">` +
                        `<div class="jubaer_item_loader" data-jubaerindexloader="${count}" style=" position: absolute; width: 100%; height: ${rowHeight}; background: rgba(255,255,255, 0.7); z-index: 22; text-align: center; align-items: center; margin: auto; justify-content: center; flex-direction: column; display : none; font-size : 1.7em; color: #CECECE">` +
                        `${uploadLoaderIcon}` +
                        `</div>` +
                        `<label class="file_upload" style="width: 100%; height: ${rowHeight}; border: 2px dashed #ddd; border-radius: 3px; cursor: pointer; text-align: center; overflow: hidden; margin-top: 5px; margin-bottom : 5px; position : relative; display: flex; align-items: center; margin: auto; justify-content: center; flex-direction: column;">` +
                        `<a href="javascript:void(0)" data-jubaerindexremove="${count}" style="z-index:9999;position: absolute !important; right : 3px; top: 3px; display : none; background : #ED3C20; border-radius: 3px; width: 30px; height: 30px; line-height : 30px; text-align: center; text-decoration : none; color : #FFF;" class="jubaer_remove_row">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                        </a>` +
                        `<img style="width: ${placeholderImageWidth}; margin: 0 auto; vertical-align: middle;" data-jubaerindexi="${count}" src="${placeholderImageTarget}" class="jubaer_image_placeholder" /> ` +
                        `<img style="width: 100%; vertical-align: middle; display:none;" class="img_" data-jubaerindeximage="${count}"/>`+
                        `<video style="width: 100%; display:none;" class="video_" data-jubaerindexvideo="${count}" controls></video>` +
                        `<audio style="width: 100%; display:none;" class="audio_" data-jubaerindexaudio="${count}" controls></audio>` +
                        `<input class="form-control jubaer_image_input"  data-jubaerindexinput="${count}" style="display : none"  name="${fieldName}" type="file">` +
                        `</label> ` +
                    `</div>` +
                `</div>`;

            var html = $.parseHTML(template);
            $(el).append(html);
            count++;
            settings.onAddRow.call(this, count);
        }

        /**
         * CALLED ON IMAGE RENDERED
         * @param  {[type]} settings [description]
         * @param  {[type]} input    [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function loadMedia(settings, input, parent) {
            var index = $(input).data("jubaerindexinput");
            if (input.files && input.files[0]) {

                var file_select = input.files[0];
                var allowedExt = settings.allowedExt;
                var maxFileSize = settings.maxFileSize;

                if (isFileTypeAllowed(file_select, allowedExt) && isFileSizeAllowed(file_select, maxFileSize) ) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        if (file_select.type.startsWith("image")) {
                            $(parent)
                                .find('img[data-jubaerindeximage="' + index + '"]')
                                .attr("src", e.target.result)
                                .show();
                            $(parent)
                                .find('img[data-jubaerindexi="' + index + '"]')
                                .hide();
                            $(parent)
                                .find(
                                    'a[data-jubaerindexremove="' + index + '"]'
                                )
                                .show();

                            $(parent)
                                .find(
                                    'video[data-jubaerindexvideo="' +
                                        index +
                                        '"]'
                                )
                                .hide();
                                $(parent)
                                .find('audio[data-jubaerindexaudio="' + index + '"]')
                                .hide();
                        } else if (file_select.type.startsWith("video")) {
                            $(parent)
                                .find(
                                    'video[data-jubaerindexvideo="' +
                                        index +
                                        '"]'
                                )
                                .attr("src", e.target.result)
                                .show();
                                $(parent)
                                .find(
                                    'a[data-jubaerindexremove="' + index + '"]'
                                )
                                .show();
                            $(parent)
                                .find('img[data-jubaerindexi="' + index + '"]')
                                .hide();
                            $(parent)
                                .find('audio[data-jubaerindexaudio="' + index + '"]')
                                .hide();

                        } else if(file_select.type.startsWith("audio")) {
                            $(parent)
                                .find(
                                    'audio[data-jubaerindexaudio="' +
                                        index +
                                        '"]'
                                )
                                .attr("src", e.target.result)
                                .show();
                                $(parent)
                                .find(
                                    'a[data-jubaerindexremove="' + index + '"]'
                                )
                                .show();
                            $(parent)
                                .find('img[data-jubaerindexi="' + index + '"]')
                                .hide();

                            $(parent)
                                .find(
                                    'video[data-jubaerindexvideo="' +
                                        index +
                                        '"]'
                                )
                                .hide();
                        }
                        settings.onRenderedPreview.call(this, index);

                        // on upload

                        if (settings.directUpload.status === true) {
                            actionDirectUpload(settings, input, parent);
                        }
                    };

                    reader.readAsDataURL(input.files[0]);
                    var is_add = false;
                    if (  $(parent).find('img[data-jubaerindeximage="'+index+'"]').is(":visible")  == false
                    ) {
                        total_count++;
                        is_add = true;
                    }
                    if (index === count - 1 && is_add) {
                        if (settings.maxCount === "") {
                            addRow(settings, parent);
                        } else if (
                            settings.maxCount !== "" &&
                            total_count < settings.maxCount
                        ) {
                            addRow(settings, parent);
                        }
                    }
                }

                if (!isFileTypeAllowed(file_select, allowedExt)) {
                    $(parent).find('input[data-jubaerindexinput="' + index + '"]').val("");
                    if (
                        $(parent)
                            .find('img[data-jubaerindeximage="' + index + '"]')
                            .is(":visible") == true
                    ) {

                        $(parent)
                            .find('img[data-jubaerindexi="' + index + '"]')
                            .hide();

                    }
                    settings.onExtensionErr.call(this, index, file_select);
                    return false;
                }else if (!isFileSizeAllowed(file_select, maxFileSize) ) {
                    $(parent).find('input[data-jubaerindexinput="' + index + '"]').val("");
                    if (
                        $(parent)
                            .find('img[data-jubaerindeximage="' + index + '"]')
                            .is(":visible") == true
                    ) {

                        $(parent)
                            .find('img[data-jubaerindexi="' + index + '"]')
                            .hide();

                    }
                    settings.onSizeErr.call(this, index, file_select);
                    return false;
                }
            }
        }

        /**
         * Check if file type is allowed
         * @param {File} file
         * @param {string} allowedExt
         * @returns {boolean}
         */
        function isFileTypeAllowed(file, allowedExt) {
            var file_select_type = file.type;
            var regex = new RegExp(`(.*?)\.(${allowedExt})$`);
            return regex.test(file_select_type) || allowedExt === "";
        }

        /**
         * Check if file size is allowed
         * @param {File} file
         * @param {number} maxFileSize
         * @returns {boolean}
         */
        function isFileSizeAllowed(file, maxFileSize) {
            return (
                maxFileSize === "" ||
                (maxFileSize !== "" && file.size / 1000 <= maxFileSize)
            );
        }

        /**
         * CALLED ON UPLOAD IS ON
         * @param  {[type]} settings [description]
         * @param  {[type]} input    [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function actionDirectUpload(settings, input, parent) {
            var index = $(input).data("jubaerindexinput");
            var formData = new FormData();
            var file = input.files[0];
            var additionalParam = settings.directUpload.additionalParam;
            $(parent)
                .find('[data-jubaerindexloader="' + index + '"]')
                .css("display", "flex");
            formData.append("file", file);

            if (typeof additionalParam !== "undefined") {
                $.each(additionalParam, function (key, value) {
                    formData.append(key, value);
                });
            }

            $.ajax({
                url: settings.directUpload.url,
                type: "POST",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR) {
                    $(parent)
                        .find('[data-jubaerindexloader="' + index + '"]')
                        .css("display", "none");

                    if (typeof settings.directUpload.success !== "undefined") {
                        settings.directUpload.success(
                            this,
                            data,
                            textStatus,
                            jqXHR
                        );
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $(parent)
                        .find('[data-jubaerindexloader="' + index + '"]')
                        .css("display", "none");
                    if (typeof settings.directUpload.error !== "undefined") {
                        settings.directUpload.error(
                            this,
                            jqXHR,
                            textStatus,
                            errorThrown
                        );
                    }
                },
            });
        }

        /**
         * REMOVE ROW
         * @param  {[type]} settings [description]
         * @param  {[type]} input    [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function removeRow(settings, input, parent) {
            var index = $(input).data("jubaerindexremove");

            $(parent)
                .find('[data-jubaerindexrow="' + index + '"]')
                .hide();
            if (last_index == index  || $(parent).find('img[data-jubaerindeximage="'+last_index+'"]').is(":visible")  == true){
                addRow(settings, parent);
            }
            total_count--;
            settings.onRemoveRow.call(this, index);
        }

        /**
         * CALLED ON ENTER HOVER THE BOX
         * @param  {[type]} parent [description]
         * @return {[type]}        [description]
         */
        function onDragEnter(parent) {
            $(parent).addClass("hover");
        }

        /**
         * CALLED ON LEAVE HOVER THE BOX
         * @param  {[type]} parent [description]
         * @return {[type]}        [description]
         */
        function onDragLeave(parent) {
            $(parent).removeClass("hover");
        }

        /**
         * CALLED ON DROP THE FILE
         * @param  {[type]} settings [description]
         * @param  {[type]} e        [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function onDropImage(settings, e, parent) {
            var parentClass = $(parent).attr("class").split(" ");
            var indexRow = "";

            for (var i = 0; i < parentClass.length; i++) {
                if (parentClass[i] == "jubaer_item_wrapper") {
                    indexRow = $(parent).data("jubaerindexrow");
                }
            }

            if (e.originalEvent.dataTransfer) {
                if (e.originalEvent.dataTransfer.files.length) {
                    e.preventDefault();
                    e.stopPropagation();

                    loadMedia(settings, e.originalEvent, parent);

                    onDragLeave(parent);
                }
            }
        }

        /**
         * CALLED ON HAVING THE FILE OVER THE BOX
         * @param  {[type]} e      [description]
         * @param  {[type]} parent [description]
         * @return {[type]}        [description]
         */
        function onDragOverImage(e, parent) {
            e.preventDefault();
            e.stopPropagation();
        }

        return this.each( function() {
            var that = this;
            addRow(settings, that);

            $(this).on("change", ".jubaer_image_input", function(){
                loadMedia(settings, this, that);
            });

            $(this).on("click", ".jubaer_remove_row", function(){
                removeRow(settings, this, that);
            });


            $(this).on("dragenter dragover dragstart", '.jubaer_item_wrapper', function(event){
                event.stopPropagation();
                event.preventDefault();
                onDragEnter(this);
            });

            $(this).on("dragleave", '.jubaer_item_wrapper', function(){
                onDragLeave(this);
            });


            $(this).on("drop", '.jubaer_item_wrapper', function(event){
                event.stopPropagation();
                event.preventDefault();
                onDropImage(settings, this, that, event);
            });

        });
    };
})(jQuery);