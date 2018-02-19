//load data

let friendData = require('../data/friends');


//Routing

module.exports = function(app) {
    //API GET Requests
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    }); 

   
    //API Post Requests

    app.post("/api/friends", (req, res) => {
        var you = req.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;
        // Loop thru all friends in the friends table to identify the friend have the lowest score difference and then return friend so modal opens showing the friend.
        for (i = 0; i < you.scores.length; i++) {
                    console.log(you.scores.length);
                    

                    currentFriendScore = currentFriendScore + Math.abs(friendsArray[i].scores[j] - you.answers[j]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            
        
        friendsTable.push(you);
        newFriendDetails = friendsTable[newFriend];
        res.json(newFriendDetails);
        });


};




