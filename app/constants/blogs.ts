export type IBlogPost = {
    title: string;
    content: string;
    genre: string;
    url: string;
}

export const blogPosts: IBlogPost[] = [
    {
        title: 'Planet Perillamus',
        content: `An excited Ethoruthan broadcasted his findings to the Inter Universe Lifeform Detection Council \n\n\‘I have discovered life on another planet.\’ \n\n\‘Oh not again, Mx Ethoruthan!’, the Chairman of the council, Dan Maraman, shot back. \n\n\‘This is the eleventh time you are making such a claim over the last six months. How many missions have we launched to verify your claim - and have even one bore any result? These voyages are damn expensive, you know'.`,
        genre: 'Sci-Fi',
        url: 'https://canyouvish.blogspot.com/2022/01/planet-perillamus.html'
    },
    {
        title: 'Around The World In Eight Days',
        content: 
        `Hey. \nOh Hi. \nI see that you are writing again. \n\nWell Yes I am trying to. I would appreciate it if you would not peek over my shoulders. \n\nShouldn't it be  'Around The World In Eighty Days'? \n\nIt would have been the case if I were Jules Verne. Seriously, I would like some privacy while writing. \n\nOh I get it. You are writing about the film festival, aren't you?'`,
        genre: 'Experience',
        url: 'https://canyouvish.blogspot.com/2016/12/around-world-in-eight-days.html'
    },
    {
        title: 'Masaan',
        content: `Another realistically made, thought provoking film which keeps the viewers intrigued and in sync with the plot.\n\nThough the primary plot is based on lost love, the movie delves into varied issues including the nation’s debatable morality laws, social stigma, cop behavior and the like. \n\nThough the viewers are offered a plethora of love stories by our filmmakers, seldom does our movies paint romance in such innocent manner. \n\nThe nervousness and sincerity are beautifully conceptualized.`,
        genre: 'Movie Review',
        url: 'https://canyouvish.blogspot.com/2016/12/around-world-in-eight-days.html'
    },
];