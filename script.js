function copyCode() {
  const code = document.getElementById("refCode").innerText;
  navigator.clipboard.writeText(code).then(() => {
    alert("Referral code copied");
  });
}
