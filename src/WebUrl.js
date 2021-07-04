const WebUrl = {
    newsNum: 3,
    newsNum2: 2,
    news: `https://gnews.io/api/v4/top-headlines?q=english+premier+league&token=${process.env.REACT_APP__GNEWS_API_KEY3}&lang=en&max=2&in=title`,
    news2: `https://gnews.io/api/v4/search?q=manchester+united&token=${process.env.REACT_APP__GNEWS_API_KEY2}&lang=en&max=2&in=title`,
    highlights: 'https://www.scorebat.com/video-api/v1/'
}

export default WebUrl