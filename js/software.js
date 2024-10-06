const box = document.getElementById('box');
const box1 = document.getElementById('box1');
const numberOfImages = 6; // 图片数量
const radius = 240; // 圆的半径
const radius1 = 100; // 圆的半径
const centerX = box.clientWidth / 2; // 圆心X坐标
const centerY = box.clientHeight / 2; // 圆心Y坐标
const centerX1 = box.clientWidth / 2; // 圆心X坐标
const centerY1 = box.clientHeight / 2; // 圆心Y坐标
const images = []; // 存储图片元素
const images1 = []; // 存储图片元素
let angle = 0; // 初始角度

const imageUrls = [
    'img/ps.png',
    'img/pr.png',
    'img/ae.png',
    'img/blender.png',
    'img/Maya.png',
	'img/剪映.png'
];
const imageUrls1 = [
	'img/IDEA.png',
	'img/HBuilder.png',
	'img/pycharm.png',
	'img/ue5.png',
	'img/unity.png',
	'img/word.png',
	// 'img/VSstudio.png'
];

// 对应的文本内容
const texts = [
    '常用来制作模型贴图、照片修图、制作UI界面，画画',
    'Premiere Pro：常用来音视频剪辑',
    'After Effects：动画制作',
    'Blender：3D模型建模、渲染，制作简单动画',
    'Maya：3D模型建模、渲染，制作简单动画',
    '剪映：视频剪辑、特效转场等'
];

const texts1 = [
    'IntelliJ IDEA：常用Java、python等编码应用',
    'HBuilder：常用于网页、小程序的代码编写',
    'PyCharm：编写python相关的代码',
    'Unreal Engine 5：场景渲染、场景建造等',
    'Unity：游戏场景建造、相关代码编写',
    'Word：展示文档编写和PPT制作'
];
// 创建文本元素用于显示
const textDisplay = document.createElement('div');
textDisplay.className = 'text-display';
document.body.appendChild(textDisplay);

// const img-center = document.getElementById('img-center');
// const textDisplay1 = document.getElementById('text-display1');

// // 定义点击后显示的文本
// const textToDisplay1 = "点击图标可以显示相关说明，Visual Studio常用于编写代码。";

// img-center.addEventListener('click', () => {
//     textDisplay1.textContent = textToDisplay1; // 设置要显示的文本
//     textDisplay1.classList.remove('hidden'); // 显示文本
// });

// 动态创建多个图片并添加到盒子中
for (let i = 0; i < numberOfImages; i++) {
	const img = document.createElement('img');
	const img1 = document.createElement('img');
	img.className = 'circle-image';
	img1.className = 'circle-image';
	img.src = imageUrls[i]; // 使用自定义的图片链接
	img1.src = imageUrls1[i]; // 使用自定义的图片链接
	
	
	box.appendChild(img);
	box.appendChild(img1);
	images.push(img);
	images1.push(img1);
	
	// 添加点击事件监听器
	img.addEventListener('click', () => {
		textDisplay.textContent = texts[i];
	});
	img1.addEventListener('click', () => {
		textDisplay.textContent = texts1[i];
	});
	
	// 设置延迟以渐渐显示图片
	setTimeout(() => {
	    img.style.opacity = 1; // 逐渐显示
	            }, i * 300); // 每个图像的显示延迟
	setTimeout(() => {
	    img1.style.opacity = 1; // 逐渐显示
	}, i * 300); // 每个图像的显示延迟
}

function animate() {
    images.forEach((image, index) => {
	//计算每个图片相对于圆心的角度。
    const offsetAngle = (2 * Math.PI / numberOfImages) * index + angle;
    const x = centerX + radius * Math.cos(offsetAngle);//当前图片的 x坐标
    const y = centerY + radius * Math.sin(offsetAngle);//当前图片的 Y 坐标
	// 更新图像的位置
    image.style.transform = `translate(${x - image.width / 2}px, ${y - image.height / 2}px)`;
    });

	angle += 0.005;// 控制运动速度
    requestAnimationFrame(animate);// 循环调用
}
function animate1() {
    images1.forEach((image1, index) => {
	//计算每个图片相对于圆心的角度。
    const offsetAngle1 = (2 * Math.PI / numberOfImages) * index - angle;
    const m = centerX1 - radius1 * Math.cos(offsetAngle1);//当前图片的 x坐标
    const n = centerY1 - radius1 * Math.sin(offsetAngle1);//当前图片的 Y 坐标
	// 更新图像的位置
    image1.style.transform = `translate(${ m- image1.width / 2}px, ${n - image1.height / 2}px)`;
    });

	angle += 0.001;// 控制运动速度
    requestAnimationFrame(animate1);// 循环调用
}
animate(); // 开始动画
animate1();
//图渐变

