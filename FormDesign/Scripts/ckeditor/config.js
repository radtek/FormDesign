/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) { 
    config.extraPlugins = "myplug";   //增加了我们的自定义插件
    config.toolbar = 'Full';

    config.toolbar_Full =
        [
            { name: 'custome_plugin', items: ['myplug'] }, //将自定义插件加入toolbar
            { name: 'insert', items: ['upload', 'album', '-', 'Table'] },
            { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
            { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'] },
            {
                name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', '-', 'Blockquote',
                    '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
            },
            { name: 'colors', items: ['TextColor', 'BGColor'] },
            { name: 'document', items: ['Source'] },
        ]; 
};
