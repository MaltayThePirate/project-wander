# [R1-A-02] Trip Window Edit Flow

- **Product Area:** Area A (Trip Management)
- **User Story:** R1-A-02
- **Functional Requirement:** FR-3
- **Status:** ✅ Implemented

## User Story
As a Trip Planner, I want to edit the Trip Window after creation, in case our travel dates change.

## Acceptance Criteria
- [x] Backend supports `PATCH /trips/:id` (or `PUT /trips/:id`) accepting `name`, `start_date`, and `end_date`.
- [x] Validation ensures `end_date >= start_date`.
- [x] Frontend trip settings or header provides an edit modal/form to modify trip dates.
- [x] TanStack Query invalidates trip cache upon successful update, reflecting new dates across the app.
