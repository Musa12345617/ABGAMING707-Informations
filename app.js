<script>

  function toggleInfo() {
    const infoSection = document.getElementById('infoSection');
    if (infoSection.style.display === 'none') {
      infoSection.style.display = 'block';
    } else {
      infoSection.style.display = 'none';
    }
  }

  function copyInfo() {
    const infoSection = document.getElementById('infoSection');
    const text = infoSection.innerText;
    navigator.clipboard.writeText(text)
      .then(() => alert('Information copied to clipboard!'))
      .catch(() => alert('Failed to copy!'));
  }
</script>
