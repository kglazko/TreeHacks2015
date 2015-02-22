Pictures = new Mongo.Collection("pictures");

if (Meteor.isClient) {
    Meteor.startup(function() {
	Uploader.finished = function(index, fileInfo, templateContext) {
	    Uploads.insert(fileInfo);
	}
//	Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
    });
    Template.body.helpers({
	pictures: function(){
	    return Pictures.find({});
	}
    });
    Template.body.events({
/*
	"submit .picture-save": function(ev){
	    _.each(ev.target.files, function(file) {
		Meteor.saveFile(file, file.name);	
    });

//	    Meteor.saveFile(ev.target.filename.file,ev.target.filename.value);
	    console.log(ev.target.filename.value+" added successfully"); 
	    ev.target.filename.value="";
	    return false;
	},
*/
	"submit .new-picture" : function(event){
	    var text = event.target.name.value;
	    var long = event.target.long.value;
	    var lat = event.target.lat.value;

	    Pictures.insert({
		name: name,
		created: new Date(),
		longitude: long,
		latitude: lat
	    });
	    console.log("New entry added successfully"); 
	    event.target.name.value="";
	    event.target.long.value="";
	    event.target.lat.value="";
	    return false;//prevent default form submit!!
	}
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      UploadServer.init({
	  tmpDir: '/home/treehacks/TreeHacks2015/meteor/public/tmp',
	  uploadDir: '/home/treehacks/TreeHacks2015/meteor/public/img',
	  checkCreateDirectories: true,
	  getDirectory: function(fileInfo, formData) {
      // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
	      return formData.contentType;
	  },
	  finished: function(fileInfo, formFields) {
      // perform a disk operation
	  },
	  cacheTime: 500,
	  mimeTypes: {
              "xml": "application/xml",
              "vcf": "text/x-vcard"
	  }
      })
  });
}
