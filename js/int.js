const imageArray = [
        "img/img1.png",
        "img/img2.png",
        "img/img3.png",
    ];

// 个人介绍文本图片显示
const itemsPerPage = 1;
let currentPage = 1;

function displayContent() {
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const contentDiv = document.getElementById("content");
	const pageInfo = document.getElementById("pageInfo");

	contentDiv.innerHTML = imageArray.slice(startIndex, endIndex)
        .map(url => `<img src="${url}" alt="图片">`)
        .join("");
    pageInfo.innerText = `第 ${currentPage} 页 / 共 ${Math.ceil(imageArray.length / itemsPerPage)} 页`;
}

function updateButtons() {
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === Math.ceil(imageArray.length / itemsPerPage);
}

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
         displayContent();
        updateButtons();
     }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentPage < Math.ceil(imageArray.length / itemsPerPage)) {
        currentPage++;
        displayContent();
        updateButtons();
    }
});

// 初始化
displayContent();
updateButtons();