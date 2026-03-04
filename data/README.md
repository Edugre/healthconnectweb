# Data

CSV inputs and outputs for clinic data.

- **FederallyQualifiedHealthCenter_gdb_*.csv** — Raw FQHC export (input for the mapping script).
- **clinics.csv** — Mapped clinic rows (output of `scripts/map_fqhc_to_clinics.py`); can be used for Supabase import.

Run from project root (use your actual FQHC input filename):
```bash
python scripts/map_fqhc_to_clinics.py data/FederallyQualifiedHealthCenter_gdb_-3172680913166293004.csv data/clinics.csv
```
