/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) { 
    config.extraPlugins = "myplug";   //���������ǵ��Զ�����
    config.toolbar = 'Full';

    config.toolbar_Full =
        [
            { name: 'custome_plugin', items: ['myplug'] }, //���Զ���������toolbar
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
