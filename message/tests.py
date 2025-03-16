from django.test import SimpleTestCase
from django.urls import reverse

class MessageViewTest(SimpleTestCase):
    def test_message_view(self):
        response = self.client.get(reverse('message'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')

# Create your tests here.
