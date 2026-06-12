document.addEventListener('DOMContentLoaded', () => { 
  const languageSwitch = document.getElementById('language-switch'); 
  const recommendationForm = document.getElementById('crop-form'); 
  const recommendationOutput = document.getElementById('recommendation-output'); 
  const chatInput = document.getElementById('chat-input'); 
  const sendBtn = document.getElementById('send-btn'); 
  const chatHistory = document.getElementById('chat-history'); 
  const voiceBtn = document.getElementById('voice-btn'); 
  const offlineStatus = document.getElementById('offline-status'); 
  const elementsToTranslate = { 
    en: { 
      headerTitle: '    Agriculture AI Decision Support', 
      weatherTitle: 'Weather Today', 
      soilTitle: 'Soil Stats', 
      formTitle: 'Crop Recommendation Form', 
      formLabels: { 
        district: 'District', 
        soil_ph: 'Soil pH', 
        soil_n: 'Nitrogen (N)', 
        soil_p: 'Phosphorus (P)', 
        soil_k: 'Potassium (K)', 
        moisture: 'Soil Moisture (%)' 
      }, 
      getRecommendationBtn: 'Get AI Recommendation', 
      chatTitle: 'Ask the AI Assistant', 
      chatPlaceholder: 'Type your question...', 
      sendButton: 'Send', 
      voiceButton: '         Voice Query', 
      footer: 'Powered by AI & Satellite Data', 
      offline: 'Offline Mode', 
      online: 'Online Mode' 
    }, 
    hi: { 
      headerTitle: '    कृ षि एआई षिर्णय समर्णि', 
      weatherTitle: 'आज का मौसम', 
      soilTitle: 'मृदा संख्या', 
      formTitle: 'फसल ससफारिश फॉमण', 
      formLabels: { 
        district: 'जजला', 
        soil_ph: 'मृदा पीएच', 
        soil_n: 'िाइट्रोजि (N)', 
        soil_p: 'फॉस्फोिस (P)', 
        soil_k: 'पोटैसशयम (K)', 
        moisture: 'मृदा आर्द्णता (%)' 
      }, 
      getRecommendationBtn: 'एआई ससफारिश प्राप्त किें', 
      chatTitle: 'एआई सहायक से पूछें', 
      chatPlaceholder: 'अपिा प्रश्न टाइप किें...', 
      sendButton: 'भेजें', 
      voiceButton: '         आवाज़ क्वेिी', 
footer: 'एआई औि सैटेलाइट डेटा द्वािा संचासलत', 
offline: 'ऑफलाइि मोड', 
online: 'ऑिलाइि मोड' 
} 
}; 
let currentLang = 'en'; 
// Language switching 
languageSwitch.addEventListener('change', (e) => { 
currentLang = e.target.value; 
updateLanguage(); 
}); 
function updateLanguage() { 
const lang = elementsToTranslate[currentLang]; 
document.querySelector('header h1').textContent = lang.headerTitle; 
document.querySelector('.weather-soil .card:nth-child(1) h2').textContent = 
lang.weatherTitle; 
document.querySelector('.weather-soil .card:nth-child(2) h2').textContent = 
lang.soilTitle; 
document.querySelector('.recommendation-form h2').textContent = lang.formTitle; 
document.querySelector('.recommendation-form button').textContent = 
lang.getRecommendationBtn; 
document.querySelector('.ai-chat h2').textContent = lang.chatTitle; 
chatInput.placeholder = lang.chatPlaceholder; 
sendBtn.textContent = lang.sendButton; 
voiceBtn.textContent = lang.voiceButton; 
document.querySelector('footer p').innerHTML = lang.footer + ` | <span id="offline
status">${offlineStatus.textContent}</span>`; 
// Update form labels 
document.querySelector("label[for='district']").textContent = lang.formLabels.district; 
document.querySelector("label[for='soil-ph-input']").textContent = 
lang.formLabels.soil_ph; 
document.querySelector("label[for='soil-n']").textContent = lang.formLabels.soil_n; 
document.querySelector("label[for='soil-p']").textContent = lang.formLabels.soil_p; 
document.querySelector("label[for='soil-k']").textContent = lang.formLabels.soil_k; 
document.querySelector("label[for='moisture']").textContent = 
lang.formLabels.moisture; 
} 
updateLanguage(); // initial setup 
// Crop recommendation form submission (mock) 
recommendationForm.addEventListener('submit', (e) => { 
e.preventDefault(); 
const formData = new FormData(recommendationForm); 
const district = formData.get('district'); 
const ph = formData.get('ph'); 
const n = formData.get('nitrogen'); 
const p = formData.get('phosphorus'); 
const k = formData.get('potassium'); 
const moisture = formData.get('moisture'); 
// Simple simulated logic for demo (replace with real API call) 
let recommendedCrop = 'Wheat'; 
if (ph < 6) recommendedCrop = 'Potato'; 
else if (moisture < 30) recommendedCrop = 'Millet'; 
let responseText = ''; 
if(currentLang === 'hi') { 
responseText = `ससफारिसशत फसल: ${recommendedCrop}<br>क्षेत्र: ${district}<br>मृदा पीएच: 
${ph}<br>िाइट्रोजि: ${n}<br>फॉस्फोिस: ${p}<br>पोटैसशयम: ${k}<br>मृदा आर्द्णता: ${moisture}%`; 
} else { 
responseText = `Recommended Crop: ${recommendedCrop}<br>District: 
${district}<br>Soil pH: ${ph}<br>Nitrogen: ${n}<br>Phosphorus: ${p}<br>Potassium: 
${k}<br>Soil Moisture: ${moisture}%`; 
} 
recommendationOutput.innerHTML = responseText; 
}); 
// Chat functionality (mock AI responses) 
sendBtn.addEventListener('click', () => { 
sendMessage(); 
}); 
chatInput.addEventListener('keypress', (e) => { 
if(e.key === 'Enter') sendMessage(); 
  }); 
 
  function sendMessage() { 
    let userMsg = chatInput.value.trim(); 
    if(!userMsg) return; 
 
    appendChatBubble(userMsg, 'user'); 
    chatInput.value = ''; 
 
    // Simulated AI reply after delay 
    setTimeout(() => { 
      let aiReply = "Sorry, I am still learning to answer that. Please try again later."; 
 
      // Simple keyword-based canned responses - extend as needed 
      if(userMsg.toLowerCase().includes('crop')) { 
        aiReply = currentLang === 'hi' ? 'आपके सलए सुझाषवत फसल गेहं है।' : 'The recommended crop for you is wheat.'; 
      } else if(userMsg.toLowerCase().includes('weather')) { 
        aiReply = currentLang === 'hi' ? 'आज का मौसम बादल छाया िहेगा।' : 'Today’s weather is cloudy.'; 
      } else if(userMsg.toLowerCase().includes('soil')) { 
        aiReply = currentLang === 'hi' ? 'मृदा पीएच क्षािीय है।' : 'The soil pH is alkaline.'; 
      } 
 
      appendChatBubble(aiReply, 'ai'); 
    }, 1200); 
} 
function appendChatBubble(text, sender) { 
const bubble = document.createElement('div'); 
bubble.classList.add('chat-bubble'); 
bubble.classList.add(sender === 'user' ? 'user-bubble' : 'ai-bubble'); 
bubble.innerHTML = text; 
chatHistory.appendChild(bubble); 
chatHistory.scrollTop = chatHistory.scrollHeight; 
} 
// Offline/Online Mode Detection 
function updateOnlineStatus() { 
if(navigator.onLine) { 
offlineStatus.textContent = elementsToTranslate[currentLang].online; 
offlineStatus.style.background = '#7ecf02'; 
offlineStatus.style.color = '#fff'; 
} else { 
offlineStatus.textContent = elementsToTranslate[currentLang].offline; 
offlineStatus.style.background = '#fdd835'; 
offlineStatus.style.color = '#333'; 
} 
} 
window.addEventListener('online', updateOnlineStatus); 
window.addEventListener('offline', updateOnlineStatus); 
updateOnlineStatus(); 
// Voice input placeholder - browser support required 
if('webkitSpeechRecognition' in window) { 
const recognition = new webkitSpeechRecognition(); 
recognition.continuous = false; 
recognition.interimResults = false; 
recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US'; 
voiceBtn.addEventListener('click', () => { 
recognition.start(); 
voiceBtn.disabled = true; 
voiceBtn.textContent = currentLang === 'hi' ? 'सुि िहे हैं...' : 'Listening...'; 
}); 
recognition.onresult = function(event) { 
const speechResult = event.results[0][0].transcript; 
chatInput.value = speechResult; 
voiceBtn.disabled = false; 
voiceBtn.textContent = elementsToTranslate[currentLang].voiceButton; 
sendMessage(); 
}; 
recognition.onerror = function() { 
voiceBtn.disabled = false; 
voiceBtn.textContent = elementsToTranslate[currentLang].voiceButton; 
alert(currentLang === 'hi' ? 'ध्वषि पहचाि षवफल हुई। कृपया पुिः प्रयास किें।' : 'Voice recognition failed. Please try again.'); 
}; 
} else { 
voiceBtn.style.display = 'none'; // Hide voice button if unsupported 
} 
});