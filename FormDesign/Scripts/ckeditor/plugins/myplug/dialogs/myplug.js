(function () {
    function myplugDialog(editor) {

        return {
            title: 'Who does you want to say hello?', //窗口标题
            minWidth: 300,
            minHeight: 80,
            buttons:
                [
                    CKEDITOR.dialog.okButton, //对话框底部的确定按钮
                    CKEDITOR.dialog.cancelButton
                ], //对话框底部的取消按钮
            contents:                      //每一个contents在对话框中都是一个tab页
                [
                    {
                        id: 'user',            //contents的id
                        label: 'You name',
                        title: 'You name',
                        elements:             //定义contents中的内容，我们这里放一个文本框，id是name
                            [
                                {
                                    id: 'name',
                                    type: 'text',
                                    style: 'width: 50%;',
                                    label: 'You name',
                                },
                                {
                                    type: 'vbox',
                                    align: 'right',
                                    width: '200px',
                                    children: [
                                        {
                                            type: 'text',
                                            id: 'age',
                                            label: 'Age'
                                        },
                                        {
                                            type: 'text',
                                            id: 'sex',
                                            label: 'Sex'
                                        },
                                        {
                                            type: 'text',
                                            id: 'nationality',
                                            label: 'Nationality'
                                        }
                                    ]
                                },
                                {
                                    type: 'select',
                                    id: 'sport',
                                    label: 'Select your favourite sport',
                                    items: [['Basketball'], ['Baseball'], ['Hockey'], ['Football']],
                                    'default': 'Football',
                                    onChange: function (api) {
                                        // this = CKEDITOR.ui.dialog.select
                                        alert('Current value: ' + this.getValue());
                                    }
                                },
                                {
                                    type: 'hbox',
                                    widths: ['95%', '25%', '50%'],
                                    children: [
                                        {
                                            type: 'text',
                                            id: 'id1',
                                            width: '40px',
                                        },
                                        {
                                            type: 'text',
                                            id: 'id2',
                                            width: '40px',
                                        },
                                        {
                                            type: 'text',
                                            id: 'id3'
                                        }
                                    ]
                                },
                                {
                                    type: 'radio',
                                    id: 'country',
                                    label: 'Which country is bigger',
                                    items: [['France', 'FR'], ['Germany', 'DE']],
                                    style: 'color: green',
                                    'default': 'DE',
                                    onClick: function () {
                                        // this = CKEDITOR.ui.dialog.radio
                                        alert('Current value: ' + this.getValue());
                                    }
                                }
                            ]
                    }
                ],
            onLoad: function () {
                //alert('onLoad');
            },
            onShow: function () {
                //alert('onShow');
            },
            onHide: function () {
                //alert('onHide');
            },
            onOk: function () {
                //点击 确定 按钮之后触发的事件
                var name = this.getValueOf('user', 'name');
                //从界面上取值的方法，getValueOf( 'contents的id', '控件的id' )
                editor.insertHtml('<p>' + name + ' : Hello world!' + '</p>');
                //将内容放入到editor
                this.commitContent();
            },
            onCancel: function () {
                //alert('onCancel');
            },
            resizable: CKEDITOR.DIALOG_RESIZE_HEIGHT
        };
    }

    CKEDITOR.dialog.add('myplugDialog', function (editor) {
        return myplugDialog(editor);
    });
})(); 