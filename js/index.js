const squares = document.querySelectorAll('.square');
const bottom = document.querySelector('.bottom');
const speeds = [2, 3, 4, 5, 6, 2, 4, 5, 6, 4,3,2]; // 每个方块的速度
let positions = [];

//顶部字母闪现效果
const letters = ['D', 'E', 'S', 'I', 'G','N', 'E','D','B', 'Y','D','Y','J'];//designed 黑
const letters1 = ['e', 'n', 'A', ' ', 'l','E', 'L','e','e', 'Y','a','i','o'];//designed 蓝
const letters2 = ['n', 'j', 'M', 'A', 'o','W', 'E','a','s', 'D','i','e','i'];//designed 紫
const letters3 = ['g', 'o', 'P', 'M', 'b','S', 'v','r','t', 's','l','l','n'];//designed 绿
const letters4 = [' ', 'y', 'L', ' ', 'a',' ', 'E','B',' ', 'y','y','d','i'];//designed 红
const letters5 = [' ', ' ', 'E', 'Y', 'l','B', 'N','E','a', 'a','s','f','n'];//designed 白
const letterbox = document.getElementById('letterbox');
let index = 0;

//微信显示
function openImage() {
	document.getElementById('imageModal').style.display = 'flex'; // 显示新窗口
	}
			
function closeImage() {
	document.getElementById('imageModal').style.display = 'none'; // 隐藏新窗口
	}
function showLetter() {

    // 清空盒子中的内容
    letterbox.innerHTML = '';

    // 创建新的字母元素
    const letter = document.createElement('span');
	const letter1 = document.createElement('span');
	const letter2 = document.createElement('span');
	const letter3 = document.createElement('span');
	const letter4 = document.createElement('span');
	const letter5 = document.createElement('span');
    letter.className = 'letter';
	letter1.className = 'letter1';
	letter2.className = 'letter2';
	letter3.className = 'letter3';
	letter4.className = 'letter4';
	letter5.className = 'letter5';
    letter.textContent = letters[index];
	letter1.textContent = letters1[index];
	letter2.textContent = letters2[index];
	letter3.textContent = letters3[index];
	letter4.textContent = letters4[index];
	letter5.textContent = letters5[index];
	// 根据索引设置字母的位置
	letter.style.transform = `translate(${index * 100}px, 0)`; // 根据索引调整位置 
	letter1.style.transform = `translate(${index * 80}px, -40px)`; // 根据索引调整位置
	letter2.style.transform = `translate(${index * 60}px, 40px)`; // 根据索引调整位置
	letter3.style.transform = `translate(${index * 40}px, 60px)`; // 根据索引调整位置
	letter4.style.transform = `translate(${index * 100}px, 20px)`; // 根据索引调整位置
	letter5.style.transform = `translate(${index * 20}px, -30px)`; // 根据索引调整位置

    // 将字母添加到盒子中
    letterbox.appendChild(letter);
	letterbox.appendChild(letter1);
	letterbox.appendChild(letter2);
	letterbox.appendChild(letter3);
	letterbox.appendChild(letter4);
	letterbox.appendChild(letter5);

    // 使用 setTimeout 控制字母的显现和消失
    setTimeout(() => {
        letter.style.opacity = '1'; // 显现
		// letter.style.transform = `translate(${index * 60}px, 0)`; // 移动到最终位置
        // 再次设置透明度为0以便消失
        setTimeout(() => {
            letter.style.opacity = '0'; // 消失
        }, 3000); // 1.5秒后消失
    }, 100); // 50毫秒后显现
	setTimeout(() => {
	    letter1.style.opacity = '1'; // 显现
	    // 再次设置透明度为0以便消失
	    setTimeout(() => {
	        letter1.style.opacity = '0'; // 消失
	    }, 1000); // 1.5秒后消失
	
	}, 100); // 50毫秒后显现
	setTimeout(() => {
	    letter2.style.opacity = '1'; // 显现
	    // 再次设置透明度为0以便消失
	    setTimeout(() => {
	        letter2.style.opacity = '0'; // 消失
	    }, 2000); // 1.5秒后消失
	
	}, 100); // 50毫秒后显现
	
	setTimeout(() => {
	    letter3.style.opacity = '1'; // 显现
	    // 再次设置透明度为0以便消失
	    setTimeout(() => {
	        letter3.style.opacity = '0'; // 消失
	    }, 2000); // 1.5秒后消失
	
	}, 100); // 50毫秒后显现
	setTimeout(() => {
	    letter4.style.opacity = '1'; // 显现
	    // 再次设置透明度为0以便消失
	    setTimeout(() => {
	        letter4.style.opacity = '0'; // 消失
	    }, 1000); // 1.5秒后消失
	
	}, 100); // 50毫秒后显现
	setTimeout(() => {
	    letter5.style.opacity = '1'; // 显现
	    // 再次设置透明度为0以便消失
	    setTimeout(() => {
	        letter5.style.opacity = '0'; // 消失
	    }, 1200); // 1.5秒后消失
	
	}, 100); // 50毫秒后显现
    // 更新索引
    index = (index + 1) % letters.length; // 循环字母索引
	
}

// 每隔2秒显示下一个字母
setInterval(showLetter, 2000);

// 随机生成方块的大小、颜色和初始位置
squares.forEach((square, index) => {
    const size = Math.random() * 50 + 10; // 随机大小范围20px到70px
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;

    square.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;

    const positionX = Math.random() * bottom.clientWidth - size; // 随机初始水平位置
    const positionY = Math.random() * bottom.clientHeight - size; // 随机初始垂直位置

    positions[index] = { x: positionX, y: positionY }; // 存储初始位置
    square.style.transform = `translate(${positionX}px, ${positionY}px)`; // 设置初始位置
});

function moveSquares() {
    squares.forEach((square, index) => {
        positions[index].x += speeds[index]; // 更新水平位置
        // positions[index].y += speeds[index]; // 更新垂直位置

        // 检查边界
        if (positions[index].x > bottom.clientWidth) {
            positions[index].x = -parseFloat(square.style.width); // 从左侧重新出现
        }
        if (positions[index].y > bottom.clientHeight) {
            positions[index].y = -parseFloat(square.style.height); // 从上方重新出现
        }

        // 应用新的位置
        square.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`; // 更新位置
    });

    requestAnimationFrame(moveSquares);
}

// 开始移动
moveSquares();
//鼠标悬停效果
const tubiao = document.getElementById('tubiao');
const hover_tubiao = document.getElementById('hover_tubiao');

tubiao.addEventListener('mouseover', () => {
    tubiao.style.display = 'none';
    hover_tubiao.style.display = 'block';
});

tubiao.addEventListener('mouseout', () => {
    tubiao.style.display = 'block';
    hover_tubiao.style.display = 'none';
});
