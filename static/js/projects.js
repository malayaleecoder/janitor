// Copyright © 2016 Jan Keromnes. All rights reserved.
// The following code is covered by the AGPL-3.0 license.


// Spawn a project-specific machine when its link is clicked.

Array.map(document.querySelectorAll('a[data-action="spawn"]'), function (link) {

  link.addEventListener('click', Scout.send(function (query) {
    query.action = link.dataset.action;
    query.data = {
      id: link.dataset.id
    };
    query.resp = function (data) {
      document.location = '/contributions/';
    };
  }));

});


// Add status badges to elements with a 'data-status' attribute.

Array.map(document.querySelectorAll('*[data-status]'), function (element) {

  var span = document.createElement('span');
  var status = element.dataset.status;

  // Format the status.
  span.textContent = status.split('-').join(' ');
  span.classList.add('text-capitalize');

  // Choose a relevant bootstrap label class.
  var label = {
    started: 'success',
    accepted: 'success',
    rejected: 'warning',
    merged: 'primary'
  };
  label['build-failed'] = 'danger';
  label['start-failed'] = 'danger';
  label['update-failed'] = 'warning';
  span.classList.add('label', 'label-' + (label[status] || 'default'));

  element.appendChild(span);

});