! function(i) {
    "use strict";

    function e() {
        this.$body = i("body"), this.$modal = i("#event-modal"), this.$calendar = i("#calendar"), this.$formEvent = i("#form-event"), this.$btnNewEvent = i("#btn-new-event"), this.$btnDeleteEvent = i("#btn-delete-event"), this.$btnSaveEvent = i("#btn-save-event"), this.$modalTitle = i("#modal-title"), this.$calendarObj = null, this.$selectedEvent = null, this.$newEventData = null
    }
    e.prototype.onEventClick = function(e) {
        this.$formEvent[0].reset(), this.$formEvent.removeClass("was-validated"), this.$newEventData = null, this.$btnDeleteEvent.show(), this.$modalTitle.text("Edit Holiday"), this.$modal.modal({
            backdrop: "static"
        }), this.$selectedEvent = e.event, i("#event-title").val(this.$selectedEvent.title), i("#event-category").val(this.$selectedEvent.classNames[0])
    }, e.prototype.onSelect = function(e) {
        this.$formEvent[0].reset(), this.$formEvent.removeClass("was-validated"), this.$selectedEvent = null, this.$newEventData = e, this.$btnDeleteEvent.hide(), this.$modalTitle.text("Add Holiday"), this.$modal.modal({
            backdrop: "static"
        }), this.$calendarObj.unselect()
    }, e.prototype.init = function() {
        var e = new Date(i.now()),
            t = [
							
							
						],
            a = this;
        a.$calendarObj = new FullCalendar.Calendar(a.$calendar[0], {
            plugins: ["bootstrap", "interaction", "dayGrid", "timeGrid", "list"],
            slotDuration: "00:15:00",
            minTime: "08:00:00",
            maxTime: "19:00:00",
            themeSystem: "bootstrap",
            bootstrapFontAwesome: !1,
            buttonText: {
                today: "Today",                
                prev: "Prev",
                next: "Next"
            },
            defaultView: "dayGridMonth",
            handleWindowResize: !0,
            height: i(window).height() - 200,
            header: {
                left: "title",
                center: "",
                right: "today prev,next"
            },
            events: t,
            editable: !0,
            droppable: !0,
            eventLimit: !0,
            selectable: !0,
            dateClick: function(e) {
                a.onSelect(e)
            },
            eventClick: function(e) {
                a.onEventClick(e)
            }
        }), a.$calendarObj.render(), a.$btnNewEvent.on("click", function(e) {
            a.onSelect({
                date: new Date,
                allDay: !0
            })
        }), a.$formEvent.on("submit", function(e) {
            e.preventDefault();
            var t = a.$formEvent[0];
            if (t.checkValidity()) {
                if (a.$selectedEvent) a.$selectedEvent.setProp("title", i("#event-title").val()), a.$selectedEvent.setProp("classNames", "bg-danger");
                else {
                    var n = {
                        title: i("#event-title").val(),
                        start: a.$newEventData.date,
                        allDay: a.$newEventData.allDay,
                        className: i("#event-category").val()
                    };
                    a.$calendarObj.addEvent(n)
                }
                a.$modal.modal("hide")
            } else e.stopPropagation(), t.classList.add("was-validated")
        }), i(a.$btnDeleteEvent.on("click", function(e) {
            a.$selectedEvent && (a.$selectedEvent.remove(), a.$selectedEvent = null, a.$modal.modal("hide"))
        }))
    }, i.CalendarApp = new e, i.CalendarApp.Constructor = e
}(window.jQuery),
function() {
    "use strict";
    window.jQuery.CalendarApp.init()
}();