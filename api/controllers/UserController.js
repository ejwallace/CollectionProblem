

module.exports = {
  
  find: function(req, res, next){
    
    Submission.create({ name: 'abc' }).then(function(sub){
      Contact.create({dummy: 'dummy', submission: sub.id}).then(function(){
        User.create({submission: sub}).then(function(user){

          User.findOne(user.id).populate('submission').then(function(user){
            if(user.submission){
              Submission.findOne(user.submission.id).populate('contact').then(function(populatedSubmission){
                user.submission = populatedSubmission;

                // ta-da! this one has
                console.log('Look, it\'s user.submission.contact!', user.submission.contact);

                //will hit User.toJSON method, which uses toObject
                //user.submission.
                var objectified = user.toJSON();

                if(objectified.submission.contact){
                  console.log('well blow me down, user.toObject didn\'t kill user.submission.contact');
                } else {
                  console.log('But after user.toJSON() it\'s gone...');
                }

                return res.json(user);
              });
            }

          });
        });

      });

    })

  }
  
};