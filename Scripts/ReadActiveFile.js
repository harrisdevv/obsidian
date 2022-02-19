module.exports = async (params) => {
    console.log("Starting...")
    console.log(params);
    const currentFile = params.app.workspace.getActiveFile();
    if (!currentFile) {
        new Notice("No active file.");
        return;
    }
    console.log("Found active file path: ", currentFile.path);

    var exec = require('child_process').exec;
    var command = '/home/harrison-hienp/mimic1/mimic -f "/home/harrison-hienp/Desktop/notes/' + currentFile.path + '" -voice slt'

	navigator.clipboard.writeText(command).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});

// exec(command,
//    function (error, stdout, stderr) {
  //      console.log('stdout: ' + stdout);
    //    console.log('stderr: ' + stderr);
      //  if (error !== null) {
        //     console.log('exec error: ' + error);
        //}
    //});
}
