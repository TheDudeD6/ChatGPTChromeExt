import requests
import json

url = 'https://openai-openai-detector--5smxg.hf.space/?'
input_text = "As an artificial intelligence language model, I don't have personal examples, but I can give a general example: A risk that I may face as a freelance worker is the lack of job security and financial stability. Freelancers often work on a project-to-project basis, and there is no guarantee of future work or income. This can make it difficult to plan for the future and can lead to financial stress. Additionally, freelancers are not typically eligible for benefits such as health insurance or retirement plans, which can further contribute to financial insecurity."

response = requests.get(url, params={'url': input_text})
data = json.loads(response.content)

print(f"Real probability: {data['real_probability']:.2f}")
print(f"Fake probability: {data['fake_probability']:.2f}")
