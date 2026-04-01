# Ingesting Content from Spreadsheets

Search AI supports ingestion of spreadsheets in .xlsx and .csv formats via [**Markdown Extraction**](extraction.md#markdown-extraction).  When uploading a spreadsheet, use Markdown Extraction as the extraction model. Search AI  automatically detects the file type and processes it appropriately.

**Supported formats:** `.xlsx` (Excel 2007+) and `.csv`. 

**Unsupported Formats:** Legacy `.xls` files are not supported — convert to `.xlsx` before uploading. 


## How It Works

When an .xlsx or .csv file is uploaded, Search AI processes it in four steps.

**Step 1: Pre-processing.** The file is identified by type.



* For `.xlsx` files, empty columns are removed, and blank cells and embedded line breaks within cells are normalised.

**Step 2: Conversion to markdown.** The file is converted to structured markdown. 



* Tables are identified by their boundaries. A blank row or blank column signals the end of one table and the start of the next. 
* Any content found after that boundary is treated as a separate table. 

**Step 3: Chunking.** The markdown is split by sheet first. Each sheet is then chunked independently using the token limit.



* The sheet name is stored as the chunk title, and the file name as the record title.
* Tables that exceed the token limit (5,000 tokens by default) are split at row boundaries.
* The original header row is re-inserted at the top of every continuation chunk, so each chunk is a self-contained, valid markdown table. 
* If a sheet contains multiple tables separated by blank rows, each is treated as a separate table in the markdown output and chunked independently. 

**Step 4: Indexing.** The resulting chunks are stored and indexed for search. 


## What Works Out of the Box

For well-structured Excel files with clear column headers and consistent data, Search AI supports:



* **Lookup and Retrieval**: This allows users to locate a specific record, value, or row based on their query. 
* **Semantic Search**: Users can perform searches across columns filled with rich text. 
* **Sheet-Scoped Queries**: Sheet names are indexed as titles for data chunks, enabling users to search for data in a specific sheet within the workbook. 
* **Cross-Sheet Retrieval**: All sheets within the same workbook are included in a single search index, enabling knowledge sharing across sheets. 
* **Formula Results**: The computed values from formulas are indexed, so users can see the results rather than the formula text itself. However, the Excel file must have been opened and saved after the last data entry, as files generated programmatically without being opened in Excel may contain empty formula cells.


## How Search AI Handles .xlsx Files

 


<table>
  <tr>
   <td><strong>Feature</strong>
   </td>
   <td><strong>Behaviour</strong>
   </td>
   <td><strong>Notes / Caveats</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Multiple sheets</strong>
   </td>
   <td>Each sheet is extracted independently
   </td>
   <td>Sheet name preserved as section header
   </td>
  </tr>
  <tr>
   <td><strong>Formula results</strong>
   </td>
   <td>Shows computed value
   </td>
   <td>Cells may be empty if the file was never saved in Excel; re-save before uploading.
<p>
Volatile formula values like Today(), Now() are captured as a snapshot at time of last save. Stale from the moment of ingestion
   </td>
  </tr>
  <tr>
   <td><strong>Large tables</strong>
   </td>
   <td>Auto-split at row boundaries
   </td>
   <td>Header row re-inserted at the top of each chunk
   </td>
  </tr>
  <tr>
   <td><strong>Multiple tables</strong>
   </td>
   <td>Tables separated by blank rows are extracted separately
   </td>
   <td>Each table is treated as an independent chunk
   </td>
  </tr>
  <tr>
   <td><strong>Merged cells</strong>
   </td>
   <td>Processed without errors
   </td>
   <td>Value appears in the top-left cell only; the remaining cells in the range are empty
   </td>
  </tr>
  <tr>
   <td><strong>Mixed-layout sheets</strong>
   </td>
   <td>Sections with different column structures are split into separate tables
   </td>
   <td>Content is preserved, but does not appear as a unified view.
   </td>
  </tr>
  <tr>
   <td><strong>Very large workbooks</strong>
   </td>
   <td>Supported
   </td>
   <td>Extraction can take up to 20 minutes for very large files
   </td>
  </tr>
  <tr>
   <td><strong>Empty rows or columns</strong>
   </td>
   <td>
   </td>
   <td>Removed to keep the output clean. 
   </td>
  </tr>
  <tr>
   <td><strong>Indented row hierarchies</strong>
   </td>
   <td>Flattened
   </td>
   <td>Parent-child relationships are flattened. 
   </td>
  </tr>
</table>


**Note**: Wide tables (many columns) can reduce search quality. Consider splitting wide datasets into narrower tables before uploading.


## Limitations

The following are not supported:



* Legacy format is not supported (.xls files). Convert to .xlsx before uploading.
* Encrypted or Password-protected files are not supported. 
* Numeric aggregations (SUM, AVERAGE, COUNT, etc.) cannot be performed.
* Pivot tables are extracted as static snapshots, reflecting the last saved state. Re-pivoting, filtering, and slicing are not available.
* Cell formatting, like cell colors, fonts, borders, conditional formatting, and number formats, is not captured.
* Visual elements like charts, sparklines, and embedded images are not extracted.
* Cell metadata, such as comments, hyperlinks, and data types (dates, booleans, currencies), is not preserved.
* Scripts like macros, VBA scripts, and named ranges are not supported.
* Any indentation or parent-child relationships are flattened and may lead to context loss. 


## Best Practices - Authoring Excel Files for Search AI

Consider the following guidelines for effective extraction from spreadsheets. 

**Always use the first row as the header row.** The system always treats the first row containing data as the header row — this is not inferred from content or formatting, it is assumed by position. The header row is the only row that carries over into every continuation chunk when a table is split. If your first row contains data rather than column names, every chunk will use that data row as its header, and the actual column names will be absent.

**Use plain language column headers.** Column headers are the primary semantic signal for retrieval. A header like `Rev_Adj_Wt_Avg` tells the system nothing — and therefore tells it nothing about the rows below it. Write headers in full, descriptive language like `Adjusted Weighted Average Revenue`. If an abbreviation is necessary, include the full form: `ARR (Annual Recurring Revenue)`.

**One table per sheet, or separate tables with a blank row between them.** The system identifies table boundaries using blank rows and blank columns. If two tables are adjacent without a blank row between them, they will be extracted as a single table with a broken schema. Separate each logical table with at least one blank row.

**Avoid merged cells wherever possible.** A merged cell's value only appears on the first cell of the range — all other cells in the merge are blank after extraction. This affects both column headers (sub-headers lose their parent label) and data rows (a group label spanning multiple rows will only appear on the first row of the group). 

**Do not encode meaning in colour or formatting.** Cell background colour, font colour, borders, and conditional formatting are all lost at extraction. If a column uses red to mean overdue and green to mean complete, that information does not exist in the extracted data. Status, category, and any other meaning should always be in a text column.

**Keep tables narrow where possible.** Very wide tables — many columns per row — produce long individual row chunks that dilute the semantic signal. If a table has many columns, consider whether it can be split into narrower related tables or whether some columns are better stored as separate metadata.

**Ensure formulas are saved with computed values.** The system extracts the computed result of a formula, not the formula itself. This only works if the file was opened and saved in Excel after the last data entry. Files generated programmatically and never opened in Excel will have empty formula cells.
