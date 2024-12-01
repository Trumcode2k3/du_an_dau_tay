document.addEventListener("DOMContentLoaded", () => {
  // Lấy tất cả các checkbox trong phần tử có id "input-checkbox"
  const checkboxes = document.querySelectorAll(
    "#input-checkbox input[type='checkbox']"
  );

  // Duyệt qua từng checkbox và gắn sự kiện click
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      const label = event.target.parentElement; // Lấy phần tử label chứa checkbox
      if (event.target.checked) {
        label.style.color = "red"; // Đổi màu chữ thành đỏ
        label.style.textDecoration = "underline"; // gach chan
      } else {
        label.style.color = ""; // Trả về màu mặc định
        label.style.textDecoration = "";
      }
    });
  });
});
