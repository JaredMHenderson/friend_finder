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
        let bestMatch = {
            name: '',
            photo:'',
            friendDiff: 1000
        }
        console.log(req.body);

        let userData = req.body;
        let userScores = userData.scores;

        console.log(userScores);

        let totalDifference = 0;

        for(var i = 0 ; i < friendData.length; i++) {
            console.log(friendData[i]);
            totalDifference = 0;
            
            for(var j = 0; j < friendData[i]; i++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i.scores[j]]));
                
                if (totalDifference <= bestMatch.friendDiff){
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMath.friendDiff = totalDifference;
                }
            }
        }
        
        friendData.push(userData);

        res.json(bestMatch);
        
        });


};




