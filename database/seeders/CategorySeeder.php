<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Template;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Content', 'color' => 'green'],
            ['name' => 'Marketing', 'color' => 'cyan'],
            ['name' => 'Other', 'color' => 'black'],
            ['name' => 'Social', 'color' => 'yellow'],
            ['name' => 'Website', 'color' => 'red']
        ];

        $templates = [
            ['id' => 'about-us', 'name' => 'About us', 'icon' => 'md-people-alt', 'route' => 'templates.about_us', 'category_id' => 'website', 'description' => 'Generate about us text on the title and description of a page.', 'prompt' => 'Generate in the :language language, an about us text, for a product :product. The voice tone is: :tone. The audience is: :audience. The product is about: :description.', 'views' => '0'],
            ['id' => 'advertisement', 'name' => 'Advertisement', 'icon' => 'md-ads-click', 'route' => 'templates.advertisement', 'category_id' => 'marketing', 'description' => 'Generate creative ad descriptions for a product or service.', 'prompt' => 'Generate in the :language language, a creative ad, aimed at: :audience, for the product: :product.', 'views' => '0'],
            ['id' => 'article', 'name' => 'Article', 'icon' => 'md-text-snippet', 'route' => 'templates.article', 'category_id' => 'content', 'description' => 'Generate articles based on title, keywords, and subheading.', 'prompt' => 'Generate in the :language language, an article about :title. The topics of the articles are: :subheadings. Include the keywords: :keywords.', 'views' => '0'],
            ['id' => 'blog-intro', 'name' => 'Blog intro', 'icon' => 'md-horizontal-split', 'route' => 'templates.blog_intro', 'category_id' => 'content', 'description' => 'Generate blog intros based on the blog post title and content.', 'prompt' => 'Generate in the :language language, an intro for a blog post titled: :title. The blog post is about: :content', 'views' => '0'],
            ['id' => 'blog-outlines', 'name' => 'Blog outlines', 'icon' => 'md-format-list-bulleted', 'route' => 'templates.blog_outlines', 'category_id' => 'content', 'description' => 'Generate blog outlines based on the blog post title and content.', 'prompt' => 'Generate in the :language language, outlines for a blog post titled: :title. The blog post is about: :content', 'views' => '0'],
            ['id' => 'blog-outro', 'name' => 'Blog outro', 'icon' => 'md-horizontal-split', 'route' => 'templates.blog_outro', 'category_id' => 'content', 'description' => 'Generate blog outros based on the blog post title and content.', 'prompt' => 'Generate in the :language language, an outro for a blog post titled: :title. The blog post is about: :content', 'views' => '0'],
            ['id' => 'blog-paragraph', 'name' => 'Blog paragraph', 'icon' => 'md-subject', 'route' => 'templates.blog_paragraph', 'category_id' => 'content', 'description' => 'Generate blog paragraphs based on the blog post title and subheading.', 'prompt' => 'Generate in the :language language, a blog paragraph about :title. The topic of the paragraph is: :subheading', 'views' => '0'],
            ['id' => 'blog-post', 'name' => 'Blog post', 'icon' => 'md-view-headline', 'route' => 'templates.blog_post', 'category_id' => 'content', 'description' => 'Generate blog posts, focused on keywords, about any topic.', 'prompt' => 'Generate in the :language language, a blog post about: :description. Focus on the keywords: :keywords', 'views' => '0'],
            ['id' => 'blog-section', 'name' => 'Blog section', 'icon' => 'md-drag-handle', 'route' => 'templates.blog_section', 'category_id' => 'content', 'description' => 'Generate blog sections based on the blog post title and subheading.', 'prompt' => 'Generate in the :language language, a few blog paragraphs about :title. The topic of the paragraphs is: :subheading', 'views' => '0'],
            ['id' => 'blog-talking-points', 'name' => 'Blog talking points', 'icon' => 'md-format-list-numbered', 'route' => 'templates.blog_talking_points', 'category_id' => 'content', 'description' => 'Generate blog talking points based on the blog post title and subheading.', 'prompt' => 'Generate in the :language language, talking points for a blog post titled: :title. The blog topic is: :subheading.', 'views' => '0'],
            ['id' => 'blog-title', 'name' => 'Blog title', 'icon' => 'md-short-text', 'route' => 'templates.blog_title', 'category_id' => 'content', 'description' => 'Generate blog titles based on the blog post content.', 'prompt' => 'Generate in the :language language, a blog title where the content of the blog post is: :content', 'views' => '0'],
            ['id' => 'call-to-action', 'name' => 'Call to action', 'icon' => 'md-call-to-action', 'route' => 'templates.call_to_action', 'category_id' => 'website', 'description' => 'Generate CTA lines based on the name and description of a product or service.', 'prompt' => 'Generate in the :language language, a short CTA line for a product named: :product. The product is about: :description. The audience of the product will include: :audience. The voice tone is: :tone.', 'views' => '0'],
            ['id' => 'content-rewrite', 'name' => 'Content rewrite', 'icon' => 'md-cached', 'route' => 'templates.content_rewrite', 'category_id' => 'content', 'description' => 'Rewrite any kind of content in seconds, in an enhanced way.', 'prompt' => 'Rewrite in the :language language: :content', 'views' => '0'],
            ['id' => 'content-summary', 'name' => 'Content summary', 'icon' => 'md-compress', 'route' => 'templates.content_summary', 'category_id' => 'content', 'description' => 'Summarize any kind of content in seconds, in an enhanced way.', 'prompt' => 'Summarize in the :language language: :content', 'views' => '0'],
            ['id' => 'freestyle', 'name' => 'Freestyle', 'icon' => 'md-draw', 'route' => 'templates.freestyle', 'category_id' => 'other', 'description' => 'Ask about anything, the only limit is imagination.', 'prompt' => ':prompt', 'views' => '2'],
            ['id' => 'hashtags', 'name' => 'Hashtags', 'icon' => 'md-tag', 'route' => 'templates.hashtags', 'category_id' => 'social', 'description' => 'Generate #hashtags for social network content.', 'prompt' => 'Generate in the :language language, hashtags for: :description.', 'views' => '0'],
            ['id' => 'headline', 'name' => 'Headline', 'icon' => 'md-view-headline', 'route' => 'templates.headline', 'category_id' => 'website', 'description' => 'Generate engaging headlines for products and services.', 'prompt' => 'Generate in the :language language, a headline of about 5 to 8 words for a product named: :product. The product is about: :description. The audience of the product will include: :audience. The voice tone is: :tone.', 'views' => '0'],
            ['id' => 'meta-description', 'name' => 'Meta description', 'icon' => 'md-code', 'route' => 'templates.meta_description', 'category_id' => 'website', 'description' => 'Generate meta descriptions based on the title and description of a page.', 'prompt' => 'Generate in the :language language, a description in two sentences, for a page called :name. Include the keywords: :keywords. The page is about: :description.', 'views' => '0'],
            ['id' => 'mission-statement', 'name' => 'Mission statement', 'icon' => 'md-rocket', 'route' => 'templates.mission_statement', 'category_id' => 'marketing', 'description' => 'Generate comprehensive and informative mission statements.', 'prompt' => 'Generate in the :language language, a mission statement for the company: :company. The voice tone is: :tone. The company is about :description', 'views' => '0'],
            ['id' => 'newsletter', 'name' => 'Newsletter', 'icon' => 'md-feed', 'route' => 'templates.newsletter', 'category_id' => 'marketing', 'description' => 'Generate engaging and comprehensive newsletters.', 'prompt' => 'Generate in the :language language, a newsletter with the subject: :subject. The company is: :company. The voice tone is: :tone.', 'views' => '0'],
            ['id' => 'paragraph', 'name' => 'Paragraph', 'icon' => 'md-subject', 'route' => 'templates.paragraph', 'category_id' => 'content', 'description' => 'Generate paragraphs, focused on keywords, about any topic.', 'prompt' => 'Generate in the :language language, a paragraph about :description. Include the keywords: :keywords', 'views' => '0'],
            ['id' => 'press-release', 'name' => 'Press release', 'icon' => 'md-newspaper', 'route' => 'templates.press_release', 'category_id' => 'marketing', 'description' => 'Generate comprehensive and informative press releases.', 'prompt' => 'Generate in the :language language, a press release for the company: :company. The voice tone is: :tone. The company is about :description. The press release subject is about: :subject.', 'views' => '0'],
            ['id' => 'subheadline', 'name' => 'Subheadline', 'icon' => 'md-view-headline', 'route' => 'templates.headline', 'category_id' => 'website', 'description' => 'Generate engaging subheadlines for products and services.', 'prompt' => 'Generate in the :language language, a subheadline for a product named: :product. The product is about: :description. The audience of the product will include: :audience. The voice tone is: :tone.', 'views' => '0'],
            ['id' => 'testimonial', 'name' => 'Testimonial', 'icon' => 'md-format-quote', 'route' => 'templates.testimonial', 'category_id' => 'website', 'description' => 'Generate testimonials based on the name and description of a product or service.', 'prompt' => 'Generate in the :language language, a testimonial of about 25 words for a product named: :product. The product is about: :description.', 'views' => '0'],
            ['id' => 'tweet', 'name' => 'Tweet', 'icon' => 'im-twitter', 'route' => 'templates.tweet', 'category_id' => 'social', 'description' => 'Generate engaging tweets based on description.', 'prompt' => 'Generate in the :language language, a tweet about: :description.', 'views' => '0'],
            ['id' => 'twitter-thread', 'name' => 'Twitter thread', 'icon' => 'fa-twitter-square', 'route' => 'templates.twitter_thread', 'category_id' => 'social', 'description' => 'Generate engaging twitter threads based on description.', 'prompt' => 'Generate in the :language language, a twitter thread about: :description.', 'views' => '0'],
            ['id' => 'value-proposition', 'name' => 'Value proposition', 'icon' => 'md-diamond', 'route' => 'templates.value_proposition', 'category_id' => 'marketing', 'description' => 'Generate value propositions for a product or service.', 'prompt' => 'Generate in the :language language, a value proposition for the product: :product. The audience is: :audience. The voice tone is: :tone. The company is about :description.', 'views' => '0'],
            ['id' => 'video-description', 'name' => 'Video description', 'icon' => 'md-video-label', 'route' => 'templates.video_description', 'category_id' => 'social', 'description' => 'Generate compelling video description based on description.', 'prompt' => 'Generate in the :language language, a video description about: :description.', 'views' => '0'],
            ['id' => 'video-tags', 'name' => 'Video tags', 'icon' => 'md-video-file', 'route' => 'templates.video_tags', 'category_id' => 'social', 'description' => 'Generate video tags for videos, based on video title.', 'prompt' => 'Generate in the :language language, hashtags for the video called: :title.', 'views' => '0'],
            ['id' => 'video-title', 'name' => 'Video title', 'icon' => 'md-video-file', 'route' => 'templates.video_title', 'category_id' => 'social', 'description' => 'Generate compelling video titles based on description.', 'prompt' => 'Generate in the :language language, a video title about: :description.', 'views' => '0'],
            ['id' => 'vision-statement', 'name' => 'Vision statement', 'icon' => 'md-grade', 'route' => 'templates.vision_statement', 'category_id' => 'marketing', 'description' => 'Generate comprehensive and informative vision statements.', 'prompt' => 'Generate in the :language language, a vision statement for the company: :company. The voice tone is: :tone. The company is about :description', 'views' => '0']
        ];

        foreach ($categories as $category) {
            $item = Category::factory()->create([
                'name' => $category['name'],
                'color' => $category['color']
            ]);

            foreach ($templates as $template) {
                if ($template['category_id'] == strtolower($category['name'])) {
                    Template::factory()->create([
                        'categories_uuid' => $item->uuid,
                        'name' => $template['name'],
                        'icon' => $template['icon'],
                        'route' => $template['route'],
                        'description' => $template['description'],
                        'prompt' => $template['prompt'],
                        'views' => $template['views']
                    ]);
                }
            }
        }
    }
}
