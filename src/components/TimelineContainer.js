import styled from 'styled-components'

const Container = styled("div")`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Layout = styled("div")`
    width: 80%;
    display: flex;
    `
const Timeline = styled("div")`
    width: 40%;
    height: 100vh;
    border: 1px solid red;
    `
const ContentsContainer = styled("div")`
    width: 60%;
    height: 100vh;
    border: 1px solid red;
    overflow-y: scroll;
    `
const TimelineContainer = (timeline, articles) => {
    const tempTimeline = [
        {
            timeline_date: "image showing date",
            timeline_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
            timeline_image: "some image"
        },
        {
            timeline_date: "image showing date",
            timeline_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
            timeline_image: "some image"
        },
        {
            timeline_date: "image showing date",
            timeline_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
            timeline_image: "some image"
        },
        {
            timeline_date: "image showing date",
            timeline_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
            timeline_image: "some image"
        }
    ]
    const tempArticles = [
        {
            article_title: "Former UCLA football players recount excitement, intensity of Bruin-Trojan rivalry",
            article_byline: "Connor Dullinger",
            article_url: "https://dailybruin.com/2025/11/23/former-ucla-football-players-recount-excitement-intensity-of-bruin-trojan-rivalry",
            article_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            article_text: "UCLA has been named the No. 1 seed in March Madness for the first time in program history. It will take on the No. 16 seed - either UC San Diego or Southern based on who wins in the First Four - on Friday at Pauley Pavilion. The Spokane, Washington, region includes No. 2 seed NC State and No. 3 seed LSU. Last season, the Tigers beat the Bruins in the Sweet 16 to end the then-No. 2 seed's postseason."
        },
        {
            article_title: "Former UCLA football players recount excitement, intensity of Bruin-Trojan rivalry",
            article_byline: "Connor Dullinger",
            article_url: "https://dailybruin.com/2025/11/23/former-ucla-football-players-recount-excitement-intensity-of-bruin-trojan-rivalry",
            article_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            article_text: "UCLA has been named the No. 1 seed in March Madness for the first time in program history. It will take on the No. 16 seed - either UC San Diego or Southern based on who wins in the First Four - on Friday at Pauley Pavilion. The Spokane, Washington, region includes No. 2 seed NC State and No. 3 seed LSU. Last season, the Tigers beat the Bruins in the Sweet 16 to end the then-No. 2 seed's postseason."
        },
        {
            article_title: "Former UCLA football players recount excitement, intensity of Bruin-Trojan rivalry",
            article_byline: "Connor Dullinger",
            article_url: "https://dailybruin.com/2025/11/23/former-ucla-football-players-recount-excitement-intensity-of-bruin-trojan-rivalry",
            article_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            article_text: "UCLA has been named the No. 1 seed in March Madness for the first time in program history. It will take on the No. 16 seed - either UC San Diego or Southern based on who wins in the First Four - on Friday at Pauley Pavilion. The Spokane, Washington, region includes No. 2 seed NC State and No. 3 seed LSU. Last season, the Tigers beat the Bruins in the Sweet 16 to end the then-No. 2 seed's postseason."
        },
        {
            article_title: "Former UCLA football players recount excitement, intensity of Bruin-Trojan rivalry",
            article_byline: "Connor Dullinger",
            article_url: "https://dailybruin.com/2025/11/23/former-ucla-football-players-recount-excitement-intensity-of-bruin-trojan-rivalry",
            article_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            article_text: "UCLA has been named the No. 1 seed in March Madness for the first time in program history. It will take on the No. 16 seed - either UC San Diego or Southern based on who wins in the First Four - on Friday at Pauley Pavilion. The Spokane, Washington, region includes No. 2 seed NC State and No. 3 seed LSU. Last season, the Tigers beat the Bruins in the Sweet 16 to end the then-No. 2 seed's postseason."
        }
    ]
    return (
        <Container>
            <Layout>
                <Timeline>
                    {tempTimeline.map((event) => {
                        return (
                            <div key={event.timeline_date}>
                                <img src={event.timeline_image} alt=""/>
                                <p>{event.timeline_date}</p>
                                <p>{event.timeline_description}</p>
                            </div>
                        )
                    })}
                </Timeline>
                <ContentsContainer>
                    {tempArticles.map((article) => {
                            return (
                                <div key={article.article_url}>
                                    <h1>{article.article_title}</h1>
                                    <p>{article.article_byline}</p>
                                    <img src={article.article_image} alt=""/>
                                    <p>{article.article_text}</p>
                                </div>
                            )
                        })}
                </ContentsContainer>
            </Layout>
        </Container>
    )
}

export default TimelineContainer;