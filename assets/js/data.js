const actors = [
  {
    id: 1,
    name : 'Tom Cruise',
    birthdate : 'July 3, 1962',
    photo : 'data:image/jpeg;base64,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',
  },
  {
      id: 2,
      name : 'Robert Downey',
      birthdate : 'April 4, 1965',
      photo : 'https://www.filmibeat.com/img/popcorn/profile_photos/tom-cruise-20190610151455-4602.jpg',
  },
  {
      id: 3,
      name : 'Johnny Depp',
      birthdate : 'June 9, 1963',
      photo : 'https://i.pinimg.com/originals/88/32/e0/8832e023b0a18e446a390eb9a3566590.jpg',
  },
{
      id: 4,
      name : 'Brad Pitt',
      birthdate : 'December 18, 1963',
      photo : 'https://cdn.7days.ru/upload/images/72c/543959d2563fca308622fe515bffd.jpg',
  },
{
      id: 5,
      name : 'Jared Leto',
      birthdate : 'December 26, 1971',
      photo : 'https://bodysize.org/wp-content/uploads/2017/03/Jared-Leto-300x400.jpg',
  },
{
      id: 6,
      name : 'Gerard Butler',
      birthdate : 'November 13, 1969',
      photo : 'https://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/4555/original/Gerard-Butler.jpg',
  },

]