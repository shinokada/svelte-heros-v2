<script>
  import * as Icon from '$lib';
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
</script>

<Icon.AcademicCap variation="mini" color={random_hex_color_code()} />
<Icon.AdjustmentsHorizontal variation="mini" color={random_hex_color_code()} />
<Icon.AdjustmentsVertical variation="mini" color={random_hex_color_code()} />
<Icon.ArchiveBox variation="mini" color={random_hex_color_code()} />
<Icon.ArchiveBoxArrowDown variation="mini" color={random_hex_color_code()} />
<Icon.ArchiveBoxXMark variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDown variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDownCircle variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDownLeft variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDownOnSquare variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDownOnSquareStack variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDownRight variation="mini" color={random_hex_color_code()} />
<Icon.ArrowDownTray variation="mini" color={random_hex_color_code()} />
<Icon.ArrowLeft variation="mini" color={random_hex_color_code()} />
<Icon.ArrowLeftCircle variation="mini" color={random_hex_color_code()} />
<Icon.ChevronDown variation="mini" />
