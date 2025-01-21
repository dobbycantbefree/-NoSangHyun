// 이미지 배열
const images = [
    '/images/image1.jpeg',
    '/images/image2.gif',
    '/images/image3.gif',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpeg',
    '/images/image7.jpg'
  ];
  
  // 랜덤 이미지 선택
  const randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById('random-image').src = images[randomIndex];
  
  // 이미지 표시
  document.addEventListener('DOMContentLoaded', () => {
    const randomImage = getRandomImage();
    document.getElementById('random-image').src = randomImage;
  });
  