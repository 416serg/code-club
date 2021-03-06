Meteor.publish("users", function () {
  var currentMeetup = currentMeetupCursor().fetch()[0];
  var userIds = [];
  Projects.find({meetupId: currentMeetup._id}).forEach(function (proj) {
    userIds = userIds.concat(proj.userIds);
  });
  return Meteor.users.find({_id: {$in: userIds}}, {fields: {profile: 1}});
});
