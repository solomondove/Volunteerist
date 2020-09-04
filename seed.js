import seeder from 'mongoose-seed';

const db = 'mongodb://localhost:3000';

seeder.connect(db, function() {
  seeder.loadModels([
    "./models/Ask.js",
    "./models/Comment.js",
    "./models/Offer.js",
    "./models/User.js"
  ])

  seeder.clearModels(["Ask", "Comment", "Offer", "User"], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

const data = [
  {
    'model': "User",
    'documents': [
      {
        'firstName': "Kevin",
        'lastName': 'Ross',
        'email': 'x@gmail.com',
        'password': '$2a$10$.ROtesiaUwhtJp4BWRxgPucpKRqFcDEnW8stMkd0EBSfH.uzTowAG',
        'pronouns': 'he/him/his',
        'stats': '',
        'completedAskIds': '',
        'acceptedAskIds': '',
        'offerIds': '',
        'description': '',
        'id': '1'
      },
      {
        'firstName': "Elijah",
        'lastName': 'Dove',
        'email': 'elijah@gmail.com',
        'password': '$2a$10$pTMBWTZU7kVXCFEkzMQWVO3MzFO92u66.trw02E/Gp//XUIArfnlO',
        'pronouns': 'he/him/his',
        'stats': '',
        'completedAskIds': '',
        'acceptedAskIds': '',
        'offerIds': '',
        'description': '',
        'id': '2'
      },
      {
        'firstName': "Solomon",
        'lastName': 'Dove',
        'email': 'solomon@gmail.com',
        'password': '$2a$10$JXOPNdyBGRTdi.ky.og.BOMxU112ZWy53.5Gc73C1h9LujnghxGNe',
        'pronouns': 'they/them/theirs',
        'stats': '',
        'completedAskIds': '',
        'acceptedAskIds': '',
        'offerIds': '',
        'description': '',
        'id': '3'
      },
      {
        'firstName': "Camille",
        'lastName': 'Fogg',
        'email': 'testtt@test.com',
        'password': '$2a$10$WAUjQB6URQAIsYOV7UHq7OYZNCf9h3Ljg59aSBQluWuiTqy6fNpKC',
        'pronouns': 'she/her/hers',
        'stats': '',
        'completedAskIds': '',
        'acceptedAskIds': '',
        'offerIds': '',
        'description': '',
        'id': '4'
      },
      {
        'firstName': "Guest",
        'lastName': 'User',
        'email': 'guest@demo.com',
        'password': '$2a$10$7muiNhrwNbGprZDjo1WoP.UF/6vFk0kMBi8LPbYIDguQTXfHyCtNu',
        'pronouns': 'they/them/theirs',
        'stats': '',
        'completedAskIds': '',
        'acceptedAskIds': '',
        'offerIds': '',
        'description': '',
        'id': '5'
      },
    ]
  },
  { 
    'model': 'Ask',
    'documents': [
      {
        'category': 'house work',
        'title': 'Need a picture hung',
        'description': 'Do you have a level? I need someone with a good eye who can handle a good picture frame hanging',
        'timeCommitment': '6',
        'deadline': '2021-09-03T00:00:00.000+00:00',
        'timeOfDay': 'afternoon',
        'posterId': '2',
        'address': 'San Francisco Botanical Garden, 1199 9th Ave, San Francisco, CA 94122, USA',
        'location':  {
          'lat': 37.7677096,
          'lng': -122.4693109
        },
        'volunteer': '5',
        'date': '2020-09-03T21:33:22.309+00:00',
        'hasVounteer': true,
        'askCompleted': false
      },
      {
        'category': 'yard work',
        'title': 'Dig a trench',
        'description': 'Seeking someone with a good, strong back to dig a trench for me. Will provide shovel and snacks.',
        'timeCommitment': '24',
        'deadline': '2021-09-03T00:00:00.000+00:00',
        'timeOfDay': 'evening',
        'posterId': '1',
        'address': 'Sutro Tower, 1 La Avanzada St, San Francisco, CA 94131, USA',
        'location':  {
          'lat': 37.7552213,
          'lng': -122.4527624
        },
        'volunteer': '5',
        'date': '2020-09-03T21:33:22.309+00:00',
        'hasVounteer': true,
        'askCompleted': false
      },
      {
        'category': 'general',
        'title': 'help!',
        'description': 'I need someone to help me with a very important project. Anyone free?',
        'timeCommitment': '1',
        'deadline': '2020-12-13T00:00:00.000+00:00',
        'timeOfDay': 'morning',
        'posterId': '4',
        'address': '600 Montgomery St, San Francisco, CA 94111, USA',
        'location':  {
          'lat': 37.79517750000001,
          'lng': -122.4027787
        },
        'date': '2020-09-03T21:33:22.309+00:00',
        'hasVounteer': false,
        'askCompleted': false
      },
      {
        'category': 'yard work',
        'title': 'plants',
        'description': 'Anyone got a green thumb? Looking for someone to water my plants this weekend',
        'timeCommitment': '1',
        'timeOfDay': 'morning',
        'posterId': '3',
        'address': '525 Clayton St, San Francisco, CA 94117, USA',
        'location':  {
          'lat': 37.770351,
          'lng': -122.448848
        },
        'date': '2020-09-04T21:33:22.309+00:00',
        'hasVounteer': false,
        'askCompleted': false
      },
    ]
  },
  {
    'model': 'Offer',
    'documents': [
      {
        'category': 'general',
        'title': 'need help?',
        'description': "I've got two hands and nothing but free time",
        'timeCommitment': '2',
        'timeOfDay': 'morning',
        'posterId': '2',
        'address': '2295 Harrison St, San Francisco, CA 94110',
        'location': {
          'lat': 37.760926,
          'lng': -122.412511
        },
        'acceptor': '5',
        'date': '2020-09-04T21:33:22.309+00:00',
        'hasBeenAccepted': true,
        'offerCompleted': false
      },
      {
        'category': 'yard work',
        'title': 'lawn mower seeking lawn',
        'description': "If your lawn is looking awfully shaggy, give me a ring",
        'timeCommitment': '2',
        'timeOfDay': 'morning',
        'posterId': '1',
        'address': 'Golden Gate Park Tennis Courts, San Francisco, CA 94117',
        'location': {
          'lat': 37.769780,
          'lng': -122.459180
        },
        'date': '2020-09-04T21:33:22.309+00:00',
        'hasBeenAccepted': false,
        'offerCompleted': false
      },
      {
        'category': 'general',
        'title': 'offering eating help',
        'description': "lemme know if your burger is too big or you need someone to finish your fries",
        'timeCommitment': '5',
        'timeOfDay': 'afternoon',
        'posterId': '4',
        'address': '2100-2198 Moraga St, San Francisco, CA 94122',
        'location': {
          'lat': 37.755787,
          'lng': -122.485442
        },
        'date': '2020-09-04T21:33:22.309+00:00',
        'hasBeenAccepted': false,
        'offerCompleted': false
      },
      {
        'category': 'house work',
        'title': 'secret shopper',
        'description': "If you need help picking an outfit, lmk. I gotchu fam",
        'timeCommitment': '2',
        'timeOfDay': 'afternoon',
        'posterId': '3',
        'address': 'Haight-Ashbury, San Francisco, CA 94117',
        'location': {
          'lat': 37.770078,
          'lng': -122.445634
        },
        'date': '2020-09-04T21:33:22.309+00:00',
        'hasBeenAccepted': false,
        'offerCompleted': false
      },
      {
        'category': 'general',
        'title': 'sure why not',
        'description': "If you need help with something I can probably do it.",
        'timeCommitment': '1',
        'timeOfDay': 'morning',
        'posterId': '5',
        'address': '64 Ashton Ave, San Francisco, CA 94112',
        'location': {
          'lat': 37.719359,
          'lng': -122.461751
        },
        'date': '2020-09-04T21:33:22.309+00:00',
        'hasBeenAccepted': false,
        'offerCompleted': false
      },
    ]
  }
  // {
  //   'model': 'Comment',
  //   'documents': [
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //     {
  //       'posterId': '',
  //       'posterName': '',
  //       'askId': '',
  //       'offerId': '',
  //       'body': '',
  //     },
  //   ]
  // }
];