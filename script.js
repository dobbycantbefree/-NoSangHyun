// 이미지 배열
const images = [
    'images/image1.jpeg',
    'images/image2.gif',
    'images/image3.gif',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpeg',
    'images/image7.jpg'
  ];
  
  // 랜덤으로 이미지를 선택하는 함수
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  // 이미지 표시
  document.addEventListener('DOMContentLoaded', () => {
    const randomImage = getRandomImage();
    document.getElementById('randomImage').src = randomImage;
  });
  