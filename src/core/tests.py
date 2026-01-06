from django.test import TestCase


class SitemapTests(TestCase):
    def test_sitemap_returns_xml(self):
        response = self.client.get("/sitemap.xml")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response["Content-Type"], "application/xml")

    def test_sitemap_contains_static_pages(self):
        response = self.client.get("/sitemap.xml")
        content = response.content.decode()
        self.assertIn("<loc>", content)
        self.assertIn("/projects/", content)

    def test_sitemap_is_valid_xml(self):
        response = self.client.get("/sitemap.xml")
        content = response.content.decode()
        self.assertIn('<?xml version="1.0" encoding="UTF-8"?>', content)
        self.assertIn("<urlset", content)


class RobotsTxtTests(TestCase):
    def test_robots_txt_accessible(self):
        response = self.client.get("/robots.txt")
        self.assertEqual(response.status_code, 200)

    def test_robots_txt_contains_sitemap(self):
        response = self.client.get("/robots.txt")
        content = response.content.decode()
        self.assertIn("Sitemap:", content)
        self.assertIn("sitemap.xml", content)
