if (!window.Blazor)
	window.Blazor = {};

window.Blazor.CKEditor = {
	instances: [],
	initClassicCKEditor: function (id) {
		ClassicEditor
			.create(document.querySelector('#' + id))
			.then(editor => {
                console.log("Created " + id);
                window.Blazor.CKEditor.instances[id] = editor;
			})
			.catch(error => {
				console.error(error);
			});
		return true;
	},
	destroyCKEditor: function (id) {
        var editor = window.Blazor.CKEditor.instances[id];
		if (editor)
            editor.destroy();
        console.log("Created " + id);
		return true;
	}
};