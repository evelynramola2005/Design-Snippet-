// Function to copy code to clipboard
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText;
    navigator.clipboard.writeText(codeText)
      .then(() => alert('Code copied to clipboard!'))
      .catch(() => alert('Failed to copy code.'));
  }