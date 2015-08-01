---
layout: page
title: Portfolio
permalink: /portfolio/
order: 1
icon: fa-archive
description: Various websites I've developed and/or currently maintain
classes: normal portfolio
---

<div class="projects-container">
	{% for project in site.data.projects %}
	<div class="portfolio-project {{project.classes}}">
		<div class="project-card">
			<div class="front blowup" style="background-image: url(/assets/{{ project.frontImage }});">
				<h4 class="project-name">{{ project.name }}</h4>
			</div>

			<div class="back project-details">
				<h2 class="project-name">{{ project.name }}</h2>
				<ul>
					<li>{{ project.description }}</li>
					<li><a href="{{ project.link }}" target="_blank">Link to {{ project.name }}</a></li>
				</ul>
			</div>
		</div>
	</div>
	{% endfor %}
</div>
