'use strict';

var conferences = [
    {
        id: 1,
        name: 'Mix-IT',
        description: 'Des conférences pour faire des découvertes, des jeux pour apprendre, des ateliers de développement ou créatifs, Mix-IT c\'est 2 jours intenses de progrès et de rencontres ! La soirée, ouverte à tous, est aussi le moment idéal pour faire des connaissances et s\'ouvrir aux autres cultures.',
        place: 'Lyon',
        country: 'France',
        startdate: '2014-04-29T08:00:00.000',
        enddate: '2014-04-30T18:00:00.000',
        attendees: '500',
        price: '50',
        image: 'images/logos/mixit.png',
        themes: [1, 3, 5, 12]
    },
    {
        id: 2,
        name: 'DevoxxFr',
        description: 'La conférence des développeurs passionnés.',
        place: 'Paris',
        country: 'France',
        startdate: '2014-03-16T09:00:00',
        enddate: '2014-03-18T18:00:00',
        attendees: '1500',
        price: '650',
        image: 'images/logos/devoxx.png',
        themes: []
    },
    {
        id: 3,
        name: 'Blend webmix',
        description: 'La conférence web la plus importante de France. 2 jours de conférences, ateliers, rencontres autour du web ',
        place: '',
        country: 'France',
        startdate: '2014-10-29T09:00:00',
        enddate: '2014-10-30T18:00:00',
        attendees: '500',
        price: '239',
        image: 'images/logos/blend.png',
        themes: [6,7,8,10,12]
    },
    {
        id: 4,
        name: 'Jug summer camp',
        description: 'Le jug summer camp est la conférénce incontournable à la fin de l\u0027été pour parler Cloud, NoSQL, Web...',
        place: 'La Rochelle',
        country: 'France',
        startdate: '2014-09-18T09:00:00',
        enddate: '2014-09-19T18:00:00',
        attendees: '170',
        price: '0',
        image: 'images/logos/logo-summercamp.png',
        themes: [1,2,3,4,5,6,10,11]
    }
];

var themes = [
    { id: 1, label: 'Java'},
    { id: 2, label: 'Angular JS'},
    { id: 3, label: 'Agilite'},
    { id: 4, label: 'Android'},
    { id: 5, label: 'Mobilité'},
    { id: 6, label: 'Javascript'},
    { id: 7, label: 'HTML 5'},
    { id: 8, label: 'CSS'},
    { id: 9, label: '.NET'},
    { id: 10, label: 'Cloud'},
    { id: 11, label: 'Test'},
    { id: 12, label: 'Web'}

];