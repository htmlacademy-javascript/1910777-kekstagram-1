const commentTexts = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const commentatorNames = [
  "Дмитрий",
  "Василий",
  "Петр",
  "Семен",
  "Инга",
  "Денис",
  "Владимир",
];

const picDecriptions = [
  "Сила – не в бабках. Ведь бабки – уже старые.",
  "Из проведённых 64-х боёв у меня 64 победы. Все бои были с тенью.",
  "Взял нож - режь, взял дошик - ешь.",
  "Я живу, как карта ляжет. Ты живёшь, как мамка скажет.",
  "Никогда не сдавайтесь, идите к своей цели! А если будет сложно – сдавайтесь.",
  "Если заблудился в лесу, иди домой.",
  "Запомни: всего одна ошибка – и ты ошибся.",
  "В жизни всегда есть две дороги: одна — первая, а другая — вторая.",
  "Мы должны оставаться мыми, а они – оними.",
  "Делай, как надо. Как не надо, не делай.",
  "Работа — это не волк. Работа — ворк. А волк — это ходить.",
  "Не будьте эгоистами, в первую очередь думайте о себе!",
  "Как говорил мой дед, «Я твой дед».",
  "Без подошвы тапочки — это просто тряпочки.",
  "Слово - не воробей. Вообще ничто не воробей, кроме самого воробья.",
  "Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит.",
];

const commentsCountPerPhoto = 6;
const picsCount = 25;
let commentIds = [];
let comments = [];

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomElementsfromArr(arr, count) {
  if (count) {
    return arr
      .map((el) => (el = arr[getRandomInteger(0, arr.length - 1)]))
      .slice(-count)
      .join("");
  }
  return arr[getRandomInteger(0, arr.length - 1)];
}

function createCommentId() {
  let id = 1;

  if (commentIds.length == 0) {
    commentIds.push(id);
    return id;
  }
  commentIds.push(commentIds[commentIds.length - 1] + 1);
  return commentIds[commentIds.length - 1];
}

const generateComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, commentsCountPerPhoto)}.jpg`,
  message: getRandomElementsfromArr(commentTexts, 2),
  name: getRandomElementsfromArr(commentatorNames),
});

const generatePicInfo = (picId) => ({
  id: picId,
  url: `photos/${picId}.jpg`,
  description: getRandomElementsfromArr(picDecriptions),
  likes: getRandomInteger(15, 200),
  comments: [...Array(getRandomInteger(1, 6))].map(() => generateComment()),
});

function generatePicData() {
  // console.log([...Array(picsCount)].map((el, index) => generatePicInfo(index + 1)))
  return [...Array(picsCount)].map((el, index) => generatePicInfo(index + 1));
}

generatePicData();
