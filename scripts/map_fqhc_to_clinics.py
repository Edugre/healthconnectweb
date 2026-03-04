import csv
import sys
from pathlib import Path

# Usage (run from project root):
#   python scripts/map_fqhc_to_clinics.py <input_raw_fqhc.csv> <output_clinics.csv>
#
# Example:
#   python scripts/map_fqhc_to_clinics.py data/FederallyQualifiedHealthCenter_gdb_-3172680913166293004.csv data/clinics.csv

TARGET_HEADER = [
    "name",
    "description",
    "website",
    "phone",
    "email",
    "address_line1",
    "address_line2",
    "city",
    "state",
    "zip",
    "neighborhood",
    "languages",
    "specialties",
    "care_types",
    "clinic_type",
    "public_private",
    "sliding_scale",
    "uninsured_accepted",
    "medicaid_accepted",
    "medicare_accepted",
    "low_income_focused",
    "fqhq_flag",
    "meds_onsite",
    "free_therapy",
    "price_min",
    "price_max",
    "availability_status",
    "rating",
    "review_count",
    "source",
    "notes",
    "latitude",
    "longitude",
]

# Default values you can tweak
DEFAULT_STATE = "FL"
DEFAULT_LANGUAGES = "{Spanish,English}"      # Postgres text[]
DEFAULT_CARE_TYPES = "{primary_care}"        # Postgres text[]
DEFAULT_CLINIC_TYPE = "clinic"
DEFAULT_PUBLIC_PRIVATE = "non-profit"
DEFAULT_SLIDING_SCALE = "true"
DEFAULT_UNINSURED = "true"
DEFAULT_MEDICAID = "true"
DEFAULT_MEDICARE = ""                        # leave blank if unsure
DEFAULT_LOW_INCOME = "true"
DEFAULT_FQHC_FLAG = "true"
DEFAULT_MEDS_ONSITE = "false"
DEFAULT_FREE_THERAPY = "false"
DEFAULT_AVAILABILITY = ""                    # e.g. "green" if you want
DEFAULT_RATING = ""
DEFAULT_REVIEW_COUNT = ""
DEFAULT_SOURCE = "miami-dade-fqhc"
DEFAULT_NOTES = ""


def map_row(raw: dict) -> dict:
    """
    Map a row from the raw FQHC CSV to the target clinics schema.

    Expected raw columns (from your file):
      OBJECTID, PROVIDER, ADDRESS, CITY, ZIPCODE, LAT, LON, POINT_X, POINT_Y, x, y
    """
    provider = (raw.get("PROVIDER") or "").strip()
    address = (raw.get("ADDRESS") or "").strip()
    city = (raw.get("CITY") or "").strip()
    zipcode = (raw.get("ZIPCODE") or "").strip()
    lat = (raw.get("LAT") or "").strip()
    lon = (raw.get("LON") or "").strip()

    mapped = {
        "name": provider,
        "description": "",
        "website": "",
        "phone": "",
        "email": "",
        "address_line1": address,
        "address_line2": "",
        "city": city,
        "state": DEFAULT_STATE,
        "zip": zipcode,
        "neighborhood": "",
        "languages": DEFAULT_LANGUAGES,
        "specialties": "",             # you can fill later if you want
        "care_types": DEFAULT_CARE_TYPES,
        "clinic_type": DEFAULT_CLINIC_TYPE,
        "public_private": DEFAULT_PUBLIC_PRIVATE,
        "sliding_scale": DEFAULT_SLIDING_SCALE,
        "uninsured_accepted": DEFAULT_UNINSURED,
        "medicaid_accepted": DEFAULT_MEDICAID,
        "medicare_accepted": DEFAULT_MEDICARE,
        "low_income_focused": DEFAULT_LOW_INCOME,
        "fqhq_flag": DEFAULT_FQHC_FLAG,
        "meds_onsite": DEFAULT_MEDS_ONSITE,
        "free_therapy": DEFAULT_FREE_THERAPY,
        "price_min": "",
        "price_max": "",
        "availability_status": DEFAULT_AVAILABILITY,
        "rating": DEFAULT_RATING,
        "review_count": DEFAULT_REVIEW_COUNT,
        "source": DEFAULT_SOURCE,
        "notes": DEFAULT_NOTES,
        "latitude": lat,
        "longitude": lon,
    }

    return mapped


def main(input_path: str, output_path: str) -> None:
    input_file = Path(input_path)
    output_file = Path(output_path)

    if not input_file.exists():
        print(f"Input file not found: {input_file}")
        sys.exit(1)

    with input_file.open(newline="", encoding="utf-8-sig") as f_in, \
         output_file.open("w", newline="", encoding="utf-8") as f_out:

        reader = csv.DictReader(f_in)
        writer = csv.DictWriter(f_out, fieldnames=TARGET_HEADER)

        writer.writeheader()

        count = 0
        for raw_row in reader:
            mapped = map_row(raw_row)
            writer.writerow(mapped)
            count += 1

    print(f"Wrote {count} clinic rows to {output_file}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python map_fqhc_to_clinics.py input_raw.csv output_clinics.csv")
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])