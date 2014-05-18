/* Copyright © 2014 TheHostingTool
 *
 * This file is part of TheHostingTool.
 *
 * TheHostingTool is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TheHostingTool is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with TheHostingTool.  If not, see <http://www.gnu.org/licenses/>.
 */

function ajaxSlide(id, url, callback) {
    if(callback == undefined || callback == null) {
        callback = function() {};
    }
    $.get(url, function(data) {
        if(document.getElementById(id).style.display == 'none') {
            document.getElementById(id).innerHTML = data;
            $("#"+id).slideDown(500, callback);
        }
        else {
            $("#"+id).slideUp(500, function() {
                document.getElementById(id).innerHTML = data;
                $("#"+id).slideDown(500, callback);
            });
        }

    });
}

function ajax(id, url, callback) {
    if(callback == undefined || callback == null) {
        callback = function() {};
    }
    $.get(url, function(data) {
        document.getElementById(id).innerHTML = data;
        callback();
    });
}
