//missing title

const mockData = 
{
  "publicChats": [
    {
      "chatId": "norra",
      "posts": [
        {
          "postId": "post1",
          "timeStamp": "Dec 2nd 13:00",
          "content": "This is the first post in chat1",
          "comments": [
            {
              "commentId": "comment1",
              "timeStamp": "Dec 2nd 13:00",
              "content": "This is a comment on post1"
            },
            {
              "commentId": "comment2",
              "timeStamp": "Dec 2nd 13:00",
              "content": "Another comment on post1"
            }
          ]
        },
        {
          "postId": "post2",
          "timeStamp": "Dec 2nd 13:00",
          "content": "This is the second post in chat1",
          "comments": []
        }
      ]
    },
    {
      "chatId": "gamla",
      "posts": [
        {
          "postId": "post1",
          "timeStamp": "Dec 2nd 13:00",
          "content": "This is the first post in chat2",
          "comments": []
        }
      ]
    },
    {
      "chatId": "soder",
      "posts": []
    }
  ]
}

export default mockData
